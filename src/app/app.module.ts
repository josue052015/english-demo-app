import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LessonsMapComponent } from './components/lessons-map/lessons-map.component';
import { LessonDetailsComponent } from './components/lesson-details/lesson-details.component';
import { LevelsListComponent } from './components/levels-list/levels-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonsMapComponent,
    LessonDetailsComponent,
    LevelsListComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
