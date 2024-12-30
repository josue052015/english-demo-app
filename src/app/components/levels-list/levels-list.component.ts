import { Component, OnInit } from '@angular/core';
import { ILevels } from 'src/app/models/interfaces';

@Component({
  selector: 'app-levels-list',
  templateUrl: './levels-list.component.html',
  styleUrls: ['./levels-list.component.scss']
})
export class LevelsListComponent implements OnInit {
  levels: ILevels[] = [
    {
      "id": 1,
      "icon": "book",
      "title": "Básico",
      "description": "Ideal para quienes están empezando a aprender.",
      "redirect": "basic"
    },
    {
      "id": 2,
      "icon": "book-open",
      "title": "Intermedio",
      "description": "Para quienes tienen conocimientos previos y quieren afianzarlos.",
      "redirect": "intermediate"
    },
    {
      "id": 3,
      "icon": "award",
      "title": "Avanzado",
      "description": "Pensado para quienes dominan el idioma y buscan perfeccionarlo.",
      "redirect": "advanced"
    }
  ]
  constructor() { }

  ngOnInit(): void {
    
  }

}
