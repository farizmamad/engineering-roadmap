// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectRoadmapComponent } from './subject-roadmap/subject-roadmap.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectListComponent,
    SubjectRoadmapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
