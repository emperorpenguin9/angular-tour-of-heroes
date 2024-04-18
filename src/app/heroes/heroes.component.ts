import { Component } from '@angular/core';
import { Hero } from '../hero';
import {
  NgIf,
  NgFor,
  UpperCasePipe,
  /* . . . */
} from '@angular/common';
import { HEROES } from '../mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  imports: [NgFor, HeroDetailComponent],
})
export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;
  constructor(private heroService: HeroService) {}
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
}
