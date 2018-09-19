import { Component, OnInit } from '@angular/core';
import { heroList } from './mock-heroes';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
	heroesListed = heroList;

  constructor() { }

  ngOnInit() {
  }

}
