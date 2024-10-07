import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatInputModule, MatIconModule, MatFormFieldModule, MatButtonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  searchVal: string = "";

  constructor(private router: Router){

  }

  searchJoke() {
    this.searchVal = this.searchVal.trim();
    if (this.searchVal.length !== 0){
      this.router.navigate(["/search"], {queryParams: {searchQuery: this.searchVal}, onSameUrlNavigation: "reload"});
    }
    
  }

}
