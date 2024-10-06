import { Component , Input} from '@angular/core';
import { Joke } from '../../types';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-joke-item',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './joke-item.component.html',
  styleUrl: './joke-item.component.css'
})
export class JokeItemComponent {

  @Input() joke!: Joke;

}
