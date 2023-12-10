import { Injectable } from '@angular/core';
import { Subject } from './subject.model';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  private subjects: Subject[] = [
    {
      id: 1,
      name: 'Aerodynamics',
      excerpt: 'Explore the basics of aerodynamics—how air and objects work together to make flight possible.',
      roadmap: [
        'Introduction to basic aerodynamic concepts.',
        'Understanding airflow around objects.',
        'Exploring lift and drag forces.',
        'Principles of airfoil design.',
        'Advanced aerodynamic analysis.',
        'Application in aircraft design.',
      ],
    },
    {
      id: 2,
      name: 'Lightweight Structure',
      excerpt: 'Understand the principles behind lightweight structures, crucial for creating efficient and strong frameworks in aerospace engineering.',
      roadmap: [
        'Introduction to materials used in aerospace structures.',
        'Basics of structural design.',
        'Understanding load distribution.',
        'Analyzing stress and strain.',
        'Advanced structural design and optimization.',
        'Application in building lightweight aerospace structures.',
      ],
    },
    {
      id: 3,
      name: 'Flight Performance',
      excerpt: 'Learn the essentials of flight performance—maximizing speed, range, and fuel efficiency for safer and more efficient air travel.',
      roadmap: [
        'Basics of flight parameters (speed, range, endurance).',
        'Factors affecting flight performance.',
        'Performance charts and calculations.',
        'Optimization techniques.',
        'Advanced performance analysis.',
        'Real-world applications and case studies.',
      ],
    },
    {
      id: 4,
      name: 'Flight Dynamics',
      excerpt: 'Dive into the mechanics of flight dynamics—unraveling the complexities of aircraft motion and control systems.',
      roadmap: [
        'Basics of aircraft motion.',
        'Introduction to stability and control.',
        'Understanding aircraft response to control inputs.',
        'Introduction to autopilot systems.',
        'Advanced control system design.',
        'Simulation and testing.',
      ],
    },
    {
      id: 5,
      name: 'Control Systems',
      excerpt: 'Demystify control systems—understand the technology that ensures stable and precise navigation for aircraft.',
      roadmap: [
        'Introduction to control theory.',
        'Basics of feedback systems.',
        'PID controllers and stability.',
        'Introduction to modern control techniques.',
        'Advanced control system design.',
        'Application in aerospace systems.',
      ],
    },
    {
      id: 6,
      name: 'Propulsion',
      excerpt: 'Delve into propulsion systems—explore the technologies that propel aircraft forward with speed and efficiency.',
      roadmap: [
        'Basics of propulsion systems.',
        'Understanding thrust and efficiency.',
        'Types of propulsion systems (jet, rocket, etc.).',
        'Thermodynamics of propulsion.',
        'Advanced propulsion technologies.',
        'Integration in aircraft design.',
      ],
    },
    {
      id: 7,
      name: 'Aircraft Design',
      excerpt: 'Explore the principles of aircraft design—how form and function come together to create high-performance flying machines.',
      roadmap: [
        'Introduction to aircraft components.',
        'Basics of aerodynamic design.',
        'Structural design principles.',
        'Systems integration.',
        'Advanced design optimization.',
        'Real-world design challenges.',
      ],
    },
    {
      id: 8,
      name: 'Aircraft Operation',
      excerpt: 'Navigate the operational aspects of aircraft—understand the protocols and procedures for safe and efficient flights.',
      roadmap: [
        'Basics of flight operations.',
        'Air traffic control and regulations.',
        'Crew resource management.',
        'Emergency procedures.',
        'Advanced flight planning.',
        'Operational efficiency.',
      ],
    },
    {
      id: 9,
      name: 'Aircraft Maintenance',
      excerpt: 'Discover the critical world of aircraft maintenance—learn about the meticulous care needed to keep flying machines in top condition.',
      roadmap: [
        'Basics of aircraft maintenance.',
        'Introduction to inspections and checks.',
        'Component-level maintenance.',
        'Maintenance documentation and records.',
        'Advanced troubleshooting and diagnostics.',
        'Reliability-centered maintenance.',
      ],
    },
    {
      id: 10,
      name: 'Astrodynamics',
      excerpt: 'Journey into astrodynamics—understand the principles governing the precise trajectories of spacecraft exploring the cosmos.',
      roadmap: [
        'Introduction to celestial mechanics.',
        'Basics of orbits and trajectories.',
        'Orbital dynamics and perturbations.',
        'Launch and mission planning.',
        'Interplanetary mission design.',
        'Advanced celestial navigation.',
      ],
    },
  ];

  getSubjects(): Subject[] {
    return this.subjects;
  }

  getSubjectById(id: number): Subject | undefined {
    return this.subjects.find((subject) => subject.id === id);
  }

  getSubjectByName(name: string): Subject | undefined {
    return this.subjects.find((subject) => subject.name?.toLowerCase() === name?.toLowerCase());
  }
}
