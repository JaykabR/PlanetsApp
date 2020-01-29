import { Component, OnInit } from '@angular/core';
import { PlanetService } from 'src/planet.service';

@Component({
  selector: 'app-planets-create',
  templateUrl: './planets-create.component.html',
  styleUrls: ['./planets-create.component.css']
})
export class PlanetsCreateComponent implements OnInit {

  public planets : PlanetService;

  constructor(planets : PlanetService) { 

    this.planets = planets

  }


  ngOnInit() {
  }

  clicked(yeeto : string) {

    this.planets .addPlanet(yeeto)
    
  }

}


