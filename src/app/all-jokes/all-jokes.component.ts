import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-jokes',
  standalone: true,
  imports: [],
  templateUrl: './all-jokes.component.html',
  styleUrl: './all-jokes.component.css'
})
export class AllJokesComponent {
  constructor(private apiService: ApiService){}

  ngOnInit(){
    this.apiService.fetchData("https://icanhazdadjoke.com/search").subscribe(
      (resp:any) => {
        console.log(resp);
      })
  }
}
