import { Component, OnInit } from '@angular/core';
import { PlanetService } from 'src/planet.service';

@Component({
  selector: 'app-planets-detail',
  templateUrl: './planets-detail.component.html',
  styleUrls: ['./planets-detail.component.css']
})
export class PlanetsDetailComponent implements OnInit {

  public planets : PlanetService;

  clicked() {
    console.log("A Planet was declared");
  }

  constructor(planets: PlanetService) { 
    
    this.planets = planets;
    
    }

  ngOnInit() {
  }

}
