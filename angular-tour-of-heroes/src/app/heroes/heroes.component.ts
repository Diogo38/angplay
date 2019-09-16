import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes: Hero[]
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    console.log(hero);
    this.selectedHero = hero;
  }

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    console.log(" *** Get the list of heroes");
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

}