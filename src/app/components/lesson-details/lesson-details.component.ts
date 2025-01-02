import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { basicEnglishRoadmap } from 'src/app/files/basicLessons';
import { IExercise, IExercisePagination, IModule } from 'src/app/models/interfaces';

@Component({
  selector: 'app-lesson-details',
  templateUrl: './lesson-details.component.html',
  styleUrls: ['./lesson-details.component.scss']
})
export class LessonDetailsComponent implements OnInit {
  moduleInfo: IModule
  currentExercise: IExercise
  pagination: IExercisePagination
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const moduleId = this.route.snapshot.paramMap.get('id');
    this.moduleInfo = basicEnglishRoadmap.modules.find(x => x.id == moduleId)
    this.currentExercise = this.moduleInfo?.exercises[0]
    if (!this.currentExercise) return
    this.pagination = {
      totalExercises: this.moduleInfo?.exercises?.length,
      currentNumber: this.moduleInfo?.exercises.findIndex(x => x.id == this.currentExercise?.id) + 1
    }
  }
  setExercise() {
    if (this.pagination.currentNumber == this.moduleInfo?.exercises?.length) {
      return
    }
    this.currentExercise = this.moduleInfo?.exercises[this.pagination.currentNumber]
    this.pagination.currentNumber += 1
  }
}
