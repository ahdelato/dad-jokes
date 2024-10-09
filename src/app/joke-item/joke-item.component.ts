import { Component , Input} from '@angular/core';
import { Joke } from '../../types';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-joke-item',
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatIcon],
  templateUrl: './joke-item.component.html',
  styleUrl: './joke-item.component.css'
})
export class JokeItemComponent {

  @Input() joke: Joke = {id: "", joke: ""};
  @Input() id? : string = undefined;
  saveIcon: string = "bookmark_border";
  likeIcon: string = "thumb_up_off_alt";
  numLikes: number | string = 0;

  constructor(private apiService: ApiService){}

  ngOnInit(){
    if (this.id != undefined){    // For Saved/Top jokes
      this.apiService.fetchData("https://icanhazdadjoke.com/j/" + this.id).subscribe(
        (resp:any)=> {
          this.joke = {id: resp.id, joke: resp.joke};

          this.setBookmark(); // Do save/like code so it waits to get joke
          this.setLike();
      })
    }
    else{
      this.setBookmark();
      this.setLike();
    }
  }

  private setLike(){
    this.apiService.getData("https://54.176.31.97:4000/api/likes/" + this.joke.id).subscribe(
      (resp:any)=> {
        this.numLikes = resp.numLikes;
      },
      (error: any)=> {
        console.log("TS ERROR COMING THORUHG");
        this.numLikes = "Use HTTP connection";
      }
    )
    let likeStorage = JSON.parse(localStorage.getItem("likes")!);
    if (likeStorage.hasOwnProperty(this.joke.id)){
      this.likeIcon = "thumb_up_alt"
    }
  }

  private setBookmark(){
    let saveStorage = JSON.parse(localStorage.getItem("saves")!);
    if (saveStorage.hasOwnProperty(this.joke.id)){
      this.saveIcon = "bookmark";
    }
  }
}
