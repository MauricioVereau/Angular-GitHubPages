import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesNames:string [] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Cápitan America']
  public deletedHeroe?: string;

  removeLastHeroe():void{
    this.deletedHeroe = this.heroesNames.pop();
  }

}
