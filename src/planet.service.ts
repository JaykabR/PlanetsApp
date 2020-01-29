import { Component, Injectable } from '@angular/core';
import { Planets } from  './planets';

@Injectable({
    providedIn: 'root'
  })

export class PlanetService {
  log(arg0: string) {
    throw new Error("Method not implemented.");
  }
  
    public planets: Planets[] = [];
    constructor() { }
  
  
    addPlanet(planets: string){
      this.planets.push(new Planets(planets, 0, 0));
    }
  
    
    removeTodo(planets: Planets){
      var index = this.planets.indexOf(planets);
      this.planets = this.planets.splice(index, 1);
    }
  
  }