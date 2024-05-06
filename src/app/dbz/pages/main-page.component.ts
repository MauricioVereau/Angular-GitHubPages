import { Component } from "@angular/core";
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{

  constructor(private dbzService : DbzService){}

  get characters(): Character[]{
    return [...this.dbzService.characters];
  }

  onDeleterCharacter( id: string): void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter( characters: Character){
    this.dbzService.AddCharacter(characters);
  }

}
