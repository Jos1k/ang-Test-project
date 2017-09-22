import { Component, Input } from '@angular/core';

import { Hero } from './hero';

@Component({
    selector:'hero-detail',
    template:`
    <div *ngIf="hero">
        <h2>{{hero.Name}} details!</h2>
        <div><label>Id: </label>{{hero.Id}}</div>
        <div>
            <label>Name: </label>
            <input [(ngModel)]="hero.Name" placeholder="name">
        </div>
    </div>
`})
export class HeroDetailComponent{
    @Input()hero:Hero;
}