import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExerciseStatus } from 'src/app/enums/exerciseStatus.enum';
import { IExercise, IExercisePagination } from 'src/app/models/interfaces';

@Component({
  selector: 'app-complete-word',
  templateUrl: './complete-word.component.html',
  styleUrls: ['./complete-word.component.scss']
})
export class CompleteWordComponent implements OnInit {
  @Input() exerciseInfo: IExercise
  @Input() pagination: IExercisePagination
  @Output() onCompleted = new EventEmitter()
  exerciseStatus = ExerciseStatus
  answer: string;
  message: string;
  constructor() { }

  ngOnInit(): void {
  }

  checkExercise() {
    if (this.answer == this.exerciseInfo.correctAnswer) {
      this.exerciseInfo.status = this.exerciseStatus.success
      this.message = "Correct answer!"
    }
    else {
      this.exerciseInfo.status = this.exerciseStatus.error
      this.message = "Incorrect answer!"
    }
  }
  nextExercise() {
    this.onCompleted.emit()
  }
}
