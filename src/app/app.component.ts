import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import {MatTabsModule} from '@angular/material/tabs';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MatTabsModule, FooterComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "dad-jokes"
  activeTab: number = 1;

  constructor(private router: Router){}

  ngOnInit(){
    if (localStorage.getItem("saves") === null){
      localStorage.setItem("saves", JSON.stringify({}));
    }

    this.router.events.subscribe(() => {
      this.setActiveTab();
    })
  }

  private setActiveTab(){
    if (this.router.url.includes("random")){
      this.activeTab = 2;
    }
    else if (this.router.url.includes("saved")){
      this.activeTab = 4;
    }
    else if (this.router.url.includes("joke") || this.router.url.includes("search")){
      this.activeTab = 0;
    }
    else {
      this.activeTab = 1;
    }
  }
  
}
