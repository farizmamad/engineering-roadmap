import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SubjectService } from '../subject.service';
import { Subject } from '../subject.model';

@Component({
  selector: 'app-subject-roadmap',
  templateUrl: './subject-roadmap.component.html',
  styleUrls: ['./subject-roadmap.component.css'],
})
export class SubjectRoadmapComponent implements OnInit {
  subject: Subject | undefined;
  currentStep = 0;

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

  onLoad(event: string) {
    console.log(event);
  }

  onError(event: string | Error) {
    console.log(event);
  }

  nextStep() {
    if (!this.subject?.roadmap?.length) return;
    if (this.currentStep < this.subject?.roadmap.length - 1) {
      this.currentStep++;
    }
    this.setQueryParam('title');
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
    this.setQueryParam('title');
  }

  setActiveStep(index: number) {
    this.currentStep = index;
  }

  goBack(): void {
    this.router.navigate(['/']); // Navigate to the Subject List page
  }

  private setQueryParam(paramName: string) {
    if (this.subject?.roadmap && this.currentStep && this.subject?.roadmap[this.currentStep]?.title) {
      const queryParams: Params = { [paramName]: this.subject.roadmap[this.currentStep].title };
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams,
        queryParamsHandling: 'merge',
      });
    }
  }
}
