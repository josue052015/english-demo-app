import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { basicEnglishRoadmap } from 'src/app/files/basicLessons';
import { IRoadmap } from 'src/app/models/interfaces';

@Component({
  selector: 'app-lessons-map',
  templateUrl: './lessons-map.component.html',
  styleUrls: ['./lessons-map.component.scss']
})
export class LessonsMapComponent implements OnInit {
  roadmap: IRoadmap
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const lessonId = this.route.snapshot.paramMap.get('id');
    switch (lessonId) {
      case 'basic':
        this.roadmap = basicEnglishRoadmap
        break;
      case 'intermediate':
        break;
      case 'advanced':
        break;
    }
  }
  goToModule(id){
    this.router.navigate(['/module', id]);
  }
}
