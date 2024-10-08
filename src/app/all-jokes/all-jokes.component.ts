import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Joke } from '../../types';
import { JokeItemComponent } from "../joke-item/joke-item.component";
import { CommonModule } from '@angular/common';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-all-jokes',
  standalone: true,
  imports: [JokeItemComponent, CommonModule, MatPaginatorModule],
  templateUrl: './all-jokes.component.html',
  styleUrl: './all-jokes.component.css'
})
export class AllJokesComponent {
  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router){}

  jokes: Joke[] = [];
  numJokes: number = 0;
  page: number = 1;
  limit: number = 10;
  term: string = "";

  handlePageEvent(pageEvent: PageEvent){
    this.apiService.fetchData("https://icanhazdadjoke.com/search", {limit: this.limit, page: pageEvent.pageIndex + 1, term: this.term}).subscribe(
      (resp:any) => {
        this.jokes = resp.results;
        window.scrollTo(0, 0);
        this.page = pageEvent.pageIndex + 1;
      })
  }

  ngOnInit(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => {   // Doesn't reuse search route when executing multiple searches in a row
      return false;
    };

    if (this.route.snapshot.queryParams["searchQuery"] !== undefined){
      this.term = this.route.snapshot.queryParams["searchQuery"];
    }

    this.apiService.fetchData("https://icanhazdadjoke.com/search", {limit: this.limit, page: this.page, term: this.term}).subscribe(
      (resp:any) => {
        this.jokes = resp.results;
        this.numJokes = resp.total_jokes;
      })
  }
}
