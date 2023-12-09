import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { AerospaceSubject } from './subject';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SubjectListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aerospace-gria';

  aerospaceSubjectList: AerospaceSubject[] = [
    {
      name: 'Lightweight Structure',
      icon: '',
      description: '',
    },
    {
      name: 'Aerodynamics',
      icon: '',
      description: '',
    },
    {
      name: 'Flight Performance',
      icon: '',
      description: '',
    },
    {
      name: 'Flight Dynamics',
      icon: '',
      description: '',
    },
    {
      name: 'Control Systems',
      icon: '',
      description: '',
    },
    {
      name: 'Propulsion',
      icon: '',
      description: '',
    },
    {
      name: 'Aircraft Design',
      icon: '',
      description: '',
    },
    {
      name: 'Aircraft Operation',
      icon: '',
      description: '',
    },
    {
      name: 'Aircraft Maintenance',
      icon: '',
      description: '',
    },
    {
      name: 'Astrodynamics',
      icon: '',
      description: '',
    },
  ];

  selectedSubject: AerospaceSubject | undefined;

  updateSelectedSubject(subject: AerospaceSubject) {
    this.selectedSubject = subject;
  }
}
