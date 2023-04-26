import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;
  public showed: boolean = true
  public showeda: boolean = true


  public get capitalizeName() : string {
    return this.name.toUpperCase();
  }

  getHeroDescription ():string{
    return `${ this.name} - ${ this.age }`
  }

  changeName(): void{
    //TODO
    this.name = 'spiderman';
    this.showed = false;
  }

  changeAge(): void{
    this.age = 35;
    this.showeda = false;
  }

  resetForm():void{
    this.name = 'ironman';
    this.age = 45;
    this.showed = true;
    this.showeda = true;
  }





}
