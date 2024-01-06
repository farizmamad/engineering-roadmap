// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectRoadmapComponent } from './subject-roadmap/subject-roadmap.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SubjectListComponent,
    SubjectRoadmapComponent,
  ],
  imports: [
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    BrowserModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
