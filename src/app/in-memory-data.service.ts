import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Counter Strike 2' },
      { id: 2, name: 'Dota 2' },
      { id: 3, name: 'The Finals' },
      { id: 4, name: 'Baldurs Gate 3' },
      { id: 5, name: 'Grand Theft Auto 5' },
      { id: 6, name: 'Lethal Company' },
      { id: 7, name: 'Call of Duty' },
      { id: 8, name: 'PUBG:BATTLEGROUNDS' },
      { id: 9, name: 'Path of Exile' },
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
