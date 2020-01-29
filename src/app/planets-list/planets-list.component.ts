import { Component, OnInit } from '@angular/core';
import { PlanetService } from 'src/planet.service';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {

  public planets : PlanetService;

  constructor(planets: PlanetService) { 
    
    this.planets = planets;
    
    }

  ngOnInit() {
  }

}
