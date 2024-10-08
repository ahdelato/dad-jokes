import { Component } from '@angular/core';
import { JokeItemComponent } from '../joke-item/joke-item.component';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-saved-jokes',
  standalone: true,
  imports: [JokeItemComponent, MatPaginator, CommonModule],
  templateUrl: './saved-jokes.component.html',
  styleUrl: './saved-jokes.component.css'
})
export class SavedJokesComponent {

  ids: string[] = [];
  page: number = 1;

  ngOnInit(){
    let savedStorage = JSON.parse(localStorage.getItem("saves")!);
    this.ids = Object.keys(savedStorage);
  }

  handlePageEvent(pageEvent: PageEvent){
    window.scrollTo(0, 0);
    this.page = pageEvent.pageIndex + 1;
  }
}
