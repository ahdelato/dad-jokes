import { Component , Input} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ApiService } from '../services/api.service';
import { Joke } from '../../types';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-joke-page',
  standalone: true,
  imports: [MatButtonModule, CommonModule, MatIcon],
  templateUrl: './joke-page.component.html',
  styleUrl: './joke-page.component.css'
})
export class JokePageComponent {

  dadNum: number = this.getRndInteger(1, 5);
  joke?: Joke = undefined;

  likeStatus: string = "Like";
  saveStatus: string = "Save";

  constructor(private apiService: ApiService, private route: ActivatedRoute){}

  private getRndInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  ngOnInit(){
    this.apiService.fetchData("https://icanhazdadjoke.com/j/" + this.route.snapshot.paramMap.get("id")).subscribe(
      (resp:any) => {
        this.joke = {id: resp.id, joke: resp.joke};
        if (resp.status != 200){
          this.joke = undefined;
        }
      }
    )

    let saveStorage = JSON.parse(localStorage.getItem("saves")!);  // Save button initialization
    if (saveStorage.hasOwnProperty(this.route.snapshot.paramMap.get("id"))){
      this.saveStatus = "Saved";
    }

    let likeStorage = JSON.parse(localStorage.getItem("likes")!);
    if (likeStorage.hasOwnProperty(this.route.snapshot.paramMap.get("id"))){
      this.likeStatus = "Liked";
    }
  }

  likeSelect(){
    let likeStorage = JSON.parse(localStorage.getItem("likes")!); // Gather from localStorage again in case of data change
    if (this.likeStatus == "Like"){
      this.likeStatus = "Liked";
      likeStorage[this.route.snapshot.paramMap.get("id")!] = true;
      this.apiService.putData("http://54.176.31.97:4000/api/addLike/" + this.route.snapshot.paramMap.get("id")); // Increment likes in server
    }
    else{
      this.likeStatus = "Like";
      delete likeStorage[this.route.snapshot.paramMap.get("id")!];
      this.apiService.putData("http://54.176.31.97:4000/api/removeLike/" + this.route.snapshot.paramMap.get("id")); // Decrement likes in server
    }
    localStorage.setItem("likes", JSON.stringify(likeStorage));
  }

  saveSelect(){
    let saveStorage = JSON.parse(localStorage.getItem("saves")!); // Gather from localStorage again in case of data change
    if (this.saveStatus == "Save"){
      this.saveStatus = "Saved";
      saveStorage[this.route.snapshot.paramMap.get("id")!] = true;
    }
    else{
      this.saveStatus = "Save";
      delete saveStorage[this.route.snapshot.paramMap.get("id")!];
    }
    localStorage.setItem("saves", JSON.stringify(saveStorage));
  }

}
