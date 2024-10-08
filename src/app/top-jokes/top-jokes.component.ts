import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { JokeItemComponent } from '../joke-item/joke-item.component';

@Component({
  selector: 'app-top-jokes',
  standalone: true,
  imports: [CommonModule, JokeItemComponent],
  templateUrl: './top-jokes.component.html',
  styleUrl: './top-jokes.component.css'
})
export class TopJokesComponent {

  ids : string[] = [];

  constructor(private apiService: ApiService){}

  ngOnInit(){
    this.apiService.getData("http://54.176.31.97:4000/api/topJokes").subscribe(
      (resp:any) => {
        this.ids = resp.topJokes;
      }
    )
  }

}
