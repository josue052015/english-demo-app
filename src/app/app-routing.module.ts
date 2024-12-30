import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonsMapComponent } from './components/lessons-map/lessons-map.component';
import { LevelsListComponent } from './components/levels-list/levels-list.component';
import { LessonDetailsComponent } from './components/lesson-details/lesson-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: LevelsListComponent},
  { path: 'path/:id', component: LessonsMapComponent },
  { path: 'module/:id', component: LessonDetailsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
