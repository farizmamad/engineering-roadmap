import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AerospaceSubject } from '../subject';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subject-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.css'
})
export class SubjectListComponent implements OnInit {

  @Input() subjectList: AerospaceSubject[] = [];
  results: AerospaceSubject[] = [];
  @Output() selectedSubjectEvent = new EventEmitter<AerospaceSubject>();

  constructor() {}

  ngOnInit(): void {
    this.results = this.subjectList;
  }
  
  searchAerospaceSubjects(searchText: string) {
    if (!searchText) return;
    this.results = this.subjectList?.filter(subject => subject?.name?.toLowerCase().includes(searchText?.toLowerCase()));
  }

  selectAerospaceSubject(subject: AerospaceSubject) {
    this.selectedSubjectEvent.emit(subject);
  }
}
