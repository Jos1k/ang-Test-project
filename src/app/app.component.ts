import { Component } from '@angular/core';
import { Hero } from './hero';

const HEROES: Hero[] = [
  new Hero(1,'Ihor'),
  new Hero(2,'Mariia'),
  new Hero(3,'Lesia'),
  new Hero(4,'Alina'),
  new Hero(5,'Iryna'),
  new Hero(6,'Mykola'),
  new Hero(7,'Dima'),
  new Hero(8,'Sergiy'),
  new Hero(9,'Rostyslaw'),
  new Hero(10,'Tania')
]

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour Of Heroes';
  selectedHero:Hero;
  heroes = HEROES;
  
  onSelect(hero:Hero):void {
    this.selectedHero = hero;
  }
}
