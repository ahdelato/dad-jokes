import { Routes } from '@angular/router';
import { AllJokesComponent } from './all-jokes/all-jokes.component';
import { RandomJokeComponent } from './random-joke/random-joke.component';
import { JokePageComponent } from './joke-page/joke-page.component';
import { SavedJokesComponent } from './saved-jokes/saved-jokes.component';
import { TopJokesComponent } from './top-jokes/top-jokes.component';

export const routes: Routes = [
    {
        path: "",
        component: AllJokesComponent
    },

    {
        path: "random",
        component: RandomJokeComponent
    },

    {
        path: "search",
        component: AllJokesComponent
    },

    {
        path: "joke/:id",
        component: JokePageComponent
    },

    {
        path: "saved",
        component: SavedJokesComponent
    },

    {
        path: "top",
        component: TopJokesComponent
    }

];
