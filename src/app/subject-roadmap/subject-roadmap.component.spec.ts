import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectRoadmapComponent } from './subject-roadmap.component';

describe('SubjectRoadmapComponent', () => {
  let component: SubjectRoadmapComponent;
  let fixture: ComponentFixture<SubjectRoadmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectRoadmapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubjectRoadmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
