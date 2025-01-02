import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExerciseStatus } from 'src/app/enums/exerciseStatus.enum';
import { IExercise, IExercisePagination } from 'src/app/models/interfaces';

@Component({
  selector: 'app-select-word',
  templateUrl: './select-word.component.html',
  styleUrls: ['./select-word.component.scss']
})
export class SelectWordComponent implements OnInit {
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
  setAnswer(option){
    this.answer = option
  }
}
