import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectService } from '../subject.service';
import { Subject } from '../subject.model';

@Component({
  selector: 'app-subject-roadmap',
  templateUrl: './subject-roadmap.component.html',
  styleUrls: ['./subject-roadmap.component.css'],
})
export class SubjectRoadmapComponent implements OnInit {
  subject: Subject | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private subjectService: SubjectService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const name = String(this.route.snapshot.paramMap.get('name'));
    if (id) {
      this.subject = this.subjectService.getSubjectById(id);
      return;
    } else if (name) {
      this.subject = this.subjectService.getSubjectByName(name);
    }
  }

  goBack(): void {
    this.router.navigate(['/']); // Navigate to the Subject List page
  }
}
