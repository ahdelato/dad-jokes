import { Routes } from '@angular/router';
import { AllJokesComponent } from './all-jokes/all-jokes.component';
import { RandomJokeComponent } from './random-joke/random-joke.component';

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
    }

];
