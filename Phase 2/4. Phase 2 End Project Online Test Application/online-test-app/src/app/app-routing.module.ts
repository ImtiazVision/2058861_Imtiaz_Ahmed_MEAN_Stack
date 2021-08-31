import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  { path: '', component: QuizComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
  CommonModule],


  exports: [RouterModule]
})
export class AppRoutingModule { }
