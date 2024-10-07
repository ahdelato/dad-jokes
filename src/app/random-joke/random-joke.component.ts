import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { JokeItemComponent } from '../joke-item/joke-item.component';
import { Joke } from '../../types';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-random-joke',
  standalone: true,
  imports: [MatButtonModule, JokeItemComponent, CommonModule],
  templateUrl: './random-joke.component.html',
  styleUrl: './random-joke.component.css'
})
export class RandomJokeComponent {
  dadNum: number = 1;
  joke?: Joke = undefined;

  constructor(private apiService: ApiService){

  }

  private getRndInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  generatingJoke(){
    this.joke = undefined;
    var intervalId = setInterval(() => {
      this.dadNum = this.getRndInteger(1, 5);
    }, 50);

    setTimeout(() => {
      clearInterval(intervalId);
      this.generateJoke();
    }, 2000)
    
  }

  generateJoke(){
    this.apiService.fetchData("https://icanhazdadjoke.com").subscribe(
      (resp:any) => {
        this.joke = resp;
      })
  }

  ngOnInit(){
    this.dadNum = this.getRndInteger(1, 5);
  }
}
