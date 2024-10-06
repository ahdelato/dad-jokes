import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
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
  activeTab = "All Jokes";
}
