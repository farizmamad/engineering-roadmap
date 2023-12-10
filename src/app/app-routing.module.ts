// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectRoadmapComponent } from './subject-roadmap/subject-roadmap.component';

const routes: Routes = [
  { path: '', component: SubjectListComponent },
  { path: 'roadmap/:name', component: SubjectRoadmapComponent },
  { path: 'roadmap/:id', component: SubjectRoadmapComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
