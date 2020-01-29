export class Planets {
    name: string;
    moons: number;
    distancefromsun: number;

    constructor(name: string, moons: number, distancefromsun: number){
        this.name = name;
        this.moons = moons;
        this.distancefromsun = distancefromsun;
    }
}
