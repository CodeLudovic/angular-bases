import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public deletedHero: string | undefined = '';
  public confirm: boolean = false;
  public reseted: boolean = false;
  public heroNames: string[] = ['Ironman','Hulk','SheHulk','Spider-Man','Thor'];

  eraseLast():void {
    this.deletedHero = this.heroNames.pop();
    this.confirm = true;
    this.reseted = false;
    console.log(this.deletedHero);
  }

  reset():void {
    this.heroNames = ['Ironman','Hulk','SheHulk','Spider-Man','Thor'];
    this.reseted = true;
  }

}
