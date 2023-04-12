import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'M1S10-Ex2';
  arrayFotos: any = [
    {
       url: "https://upload.wikimedia.org/wikipedia/pt/0/00/Iron_Man_poster.jpg",
       description:"Homem de Ferro"
     },
     {
       url: "https://upload.wikimedia.org/wikipedia/pt/1/1b/Batman_begins.jpg",
       description:"Batman Begins"
     },
     {
       url: "https://upload.wikimedia.org/wikipedia/pt/6/69/The_Avengers_Cartaz.jpg?20120429164328",
       description:"Os Vingadores"
     },
     {
       url: "https://upload.wikimedia.org/wikipedia/pt/e/e8/Captain_America_The_Winter_Soldier.jpg",
       description:"Capitão America 2"
     },
     {
       url: "https://upload.wikimedia.org/wikipedia/pt/b/b2/Guardiansgalaxyposter.jpg",
       description:"Guardiões da Galáxia"
     }
   ]
}
