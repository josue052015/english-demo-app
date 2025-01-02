import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IExercise, IExercisePagination } from 'src/app/models/interfaces';

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.scss']
})
export class TalkComponent implements OnInit {
  @Input() exerciseInfo: IExercise
  @Input() pagination: IExercisePagination
  @Output() onCompleted = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

}
