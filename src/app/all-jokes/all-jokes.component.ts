import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Joke } from '../../types';
import { JokeItemComponent } from "../joke-item/joke-item.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-jokes',
  standalone: true,
  imports: [JokeItemComponent, CommonModule],
  templateUrl: './all-jokes.component.html',
  styleUrl: './all-jokes.component.css'
})
export class AllJokesComponent {
  constructor(private apiService: ApiService){}

  jokes: Joke[] = [];

  ngOnInit(){
    this.apiService.fetchData("https://icanhazdadjoke.com/search", {limit: 1, page: 1}).subscribe(
      (resp:any) => {
        this.jokes = resp.results;
        console.log(this.jokes);
      })
  }
}
