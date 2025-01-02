import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LessonsMapComponent } from './components/lessons-map/lessons-map.component';
import { LessonDetailsComponent } from './components/lesson-details/lesson-details.component';
import { LevelsListComponent } from './components/levels-list/levels-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SelectWordComponent } from './components/select-word/select-word.component';
import { CompleteWordComponent } from './components/complete-word/complete-word.component';
import { RepeatComponent } from './components/repeat/repeat.component';
import { TalkComponent } from './components/talk/talk.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LessonsMapComponent,
    LessonDetailsComponent,
    LevelsListComponent,
    NotFoundComponent,
    SelectWordComponent,
    CompleteWordComponent,
    RepeatComponent,
    TalkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
