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
        {
          title: 'Introduction to basic aerodynamic concepts.',
          contributors: ['Contributor 1'],
          body: [
            {
              subheader: 'compressible air flow',
              text: 'not vacuum'
            }
          ],
        },
        {
          title: 'Understanding airflow around objects.',
          contributors: ['Contributor 1', 'contributor 2'],
          body: [
            {
              subheader: 'body subheader 1',
              text: 'text 1'
            }
          ],
        },
        {
          title: 'Exploring lift and drag forces.',
          contributors: ['Contributor 1'],
          body: [
            {
              subheader: 'body subheader 1',
              text: 'text 1'
            }
          ],
        },
        {
          title: 'Principles of airfoil design.',
          contributors: ['Contributor 2'],
          body: [
            {
              subheader: 'body subheader 1',
              text: 'text 1'
            }
          ],
        },
        {
          title: 'Advanced aerodynamic analysis.',
          contributors: ['Contributor 2'],
          body: [
            {
              subheader: 'body subheader 1',
              text: 'text 1'
            }
          ],
        },
        {
          title: 'Application in aircraft design.',
          contributors: ['Contributor 2'],
          body: [
            {
              subheader: 'body subheader 1',
              text: 'text 1'
            }
          ],
        }
      ],
    },
    {
      id: 2,
      name: 'Lightweight Structure',
      excerpt: 'Understand the principles behind lightweight structures, crucial for creating efficient and strong frameworks in aerospace engineering.',
      roadmap: [
        {
          title: 'Introduction to materials used in aerospace structures.',
          contributors: ['Contributor 2'],
          body: [
            {
              subheader: 'body subheader 1',
              text: 'text 1'
            }
          ],
        },
        {
          title: 'Basics of structural design.',
          contributors: ['Contributor 2'],
          body: [
            {
              subheader: 'body subheader 1',
              text: 'text 1'
            }
          ],
        },
        {
          title: 'Understanding load distribution.',
          contributors: ['Contributor 2'],
          body: [
            {
              subheader: 'body subheader 1',
              text: 'text 1'
            }
          ],
        },
        {
          title: 'Analyzing stress and strain.',
          contributors: ['Contributor 2'],
          body: [
            {
              subheader: 'body subheader 1',
              text: 'text 1'
            }
          ],
        },
        {
          title: 'Advanced structural design and optimization.',
          contributors: ['Contributor 2'],
          body: [
            {
              subheader: 'body subheader 1',
              text: 'text 1'
            }
          ],
        },
        {
          title: 'Application in building lightweight aerospace structures.',
          contributors: ['Contributor 2'],
          body: [
            {
              subheader: 'body subheader 1',
              text: 'text 1'
            }
          ],
        },
      ],
    },
    {
      id: 3,
      name: 'Flight Performance',
      excerpt: 'Learn the essentials of flight performance—maximizing speed, range, and fuel efficiency for safer and more efficient air travel.',
      roadmap: [
        {
          title: 'Basics of flight parameters (speed, range, endurance).',
          contributors: ['Contributor 2'],
          body: [
            {
              subheader: 'body subheader 1',
              text: 'text 1'
            }
          ],
        },
        {
          title: 'Factors affecting flight performance.',
          contributors: ['Contributor 2'],
          body: [
            {
              subheader: 'body subheader 1',
              text: 'text 1'
            }
          ],
        },
        {
          title: 'Performance charts and calculations.',
          contributors: ['Contributor 2'],
          body: [
            {
              subheader: 'body subheader 1',
              text: 'text 1'
            }
          ],
        },
        {
          title: 'Optimization techniques.',
          contributors: ['Contributor 2'],
          body: [
            {
              subheader: 'body subheader 1',
              text: 'text 1'
            }
          ],
        },
        {
          title: 'Advanced performance analysis.',
          contributors: ['Contributor 2'],
          body: [
            {
              subheader: 'body subheader 1',
              text: 'text 1'
            }
          ],
        },
        {
          title: 'Real-world applications and case studies.',
          contributors: ['Contributor 2'],
          body: [
            {
              subheader: 'body subheader 1',
              text: 'text 1'
            }
          ],
        },
      ],
    },
    {
      id: 4,
      name: 'Flight Dynamics',
      excerpt: 'Dive into the mechanics of flight dynamics—unraveling the complexities of aircraft motion and control systems.',
      roadmap: [
        {
          title: 'Basics of aircraft motion.',
          contributors: ['Contributor 2'],
          body: [
            {
              subheader: 'body subheader 1',
              text: 'text 1'
            }
          ],
        },
        {
          title: 'Introduction to stability and control.',
          contributors: ['Contributor 2'],
          body: [
            {
              subheader: 'body subheader 1',
              text: 'text 1'
            }
          ],
        },
        {
          title: 'Understanding aircraft response to control inputs.',
          contributors: ['Contributor 2'],
          body: [
            {
              subheader: 'body subheader 1',
              text: 'text 1'
            }
          ],
        },
        {
          title: 'Introduction to autopilot systems.',
          contributors: ['Contributor 2'],
          body: [
            {
              subheader: 'body subheader 1',
              text: 'text 1'
            }
          ],
        },
        {
          title: 'Advanced control system design.',
          contributors: ['Contributor 2'],
          body: [
            {
              subheader: 'body subheader 1',
              text: 'text 1'
            }
          ],
        },
        {
          title: 'Simulation and testing.',
          contributors: ['Contributor 2'],
          body: [
            {
              subheader: 'body subheader 1',
              text: 'text 1'
            }
          ],
        },
      ],
    },
    {
      id: 5,
      name: 'Control Systems [NEW UPDATE]',
      excerpt: 'Understand the technology that ensures stable and precise navigation for aircraft.',
      roadmap: [
        {
          title: 'Introduction to control theory.',
          contributors: ['Ahmad Fariz'],
          markdownUrl: 'assets/control-systems/introduction-to-control-theory.md',
        },
        {
          title: 'Definition of control system.',
          contributors: ['Ahmad Fariz'],
          markdownUrl: 'assets/control-systems/definition-of-control-system.md',
        },
        {
          title: 'Linear Control Design',
          contributors: ['Contributor 3'],
        },
        {
          title: 'System Identitfication',
          contributors: ['Contributor 4'],
        },
        {
          title: 'Non-linear Feedback System Analysis',
          contributors: ['Contributor 5'],
        },
        {
          title: 'Non-linear Control',
          contributors: ['Contributor 5'],
        },
        {
          title: 'Application in aerospace systems.',
          contributors: ['Contributor 6'],
        },
      ],
    },
    {
      id: 6,
      name: 'Propulsion',
      excerpt: 'Delve into propulsion systems—explore the technologies that propel aircraft forward with speed and efficiency.',
      roadmap: [
        {
          title: 'Basics of propulsion systems.',
          contributors: ['Contributor 1'],
          body: [
            {
              text: 'Introduction to propulsion systems.',
            },
            {
              text: 'Importance in aerospace engineering.',
            },
            // Add more items as needed
          ],
        },
        {
          title: 'Understanding thrust and efficiency.',
          contributors: ['Contributor 2'],
          body: [
            {
              text: 'Thrust and efficiency in propulsion.',
            },
            // Add more items as needed
          ],
        },
        {
          title: 'Types of propulsion systems (jet, rocket, etc.).',
          contributors: ['Contributor 3'],
          body: [
            {
              text: 'Exploring different types of propulsion systems.',
            },
            // Add more items as needed
          ],
        },
        {
          title: 'Thermodynamics of propulsion.',
          contributors: ['Contributor 4'],
          body: [
            {
              text: 'Understanding the thermodynamics involved in propulsion.',
            },
            // Add more items as needed
          ],
        },
        {
          title: 'Advanced propulsion technologies.',
          contributors: ['Contributor 5'],
          body: [
            {
              text: 'Overview of advanced propulsion technologies.',
            },
            // Add more items as needed
          ],
        },
        {
          title: 'Integration in aircraft design.',
          contributors: ['Contributor 6'],
          body: [
            {
              text: 'Integration of propulsion systems in aircraft design.',
            },
            // Add more items as needed
          ],
        },
      ],
    },
    {
      id: 7,
      name: 'Aircraft Design',
      excerpt: 'Explore the principles of aircraft design—how form and function come together to create high-performance flying machines.',
      roadmap: [
        {
          title: 'Introduction to aircraft components.',
          contributors: ['Contributor 1'],
          body: [
            {
              text: 'Overview of aircraft components.',
            },
            {
              text: 'Importance in aerospace engineering.',
            },
            // Add more items as needed
          ],
        },
        {
          title: 'Basics of aerodynamic design.',
          contributors: ['Contributor 2'],
          body: [
            {
              text: 'Fundamentals of aerodynamic design.',
            },
            // Add more items as needed
          ],
        },
        {
          title: 'Structural design principles.',
          contributors: ['Contributor 3'],
          body: [
            {
              text: 'Understanding structural design principles.',
            },
            // Add more items as needed
          ],
        },
        {
          title: 'Systems integration.',
          contributors: ['Contributor 4'],
          body: [
            {
              text: 'Integration of systems in aircraft design.',
            },
            // Add more items as needed
          ],
        },
        {
          title: 'Advanced design optimization.',
          contributors: ['Contributor 5'],
          body: [
            {
              text: 'Exploring advanced design optimization techniques.',
            },
            // Add more items as needed
          ],
        },
        {
          title: 'Real-world design challenges.',
          contributors: ['Contributor 6'],
          body: [
            {
              text: 'Addressing real-world challenges in aircraft design.',
            },
            // Add more items as needed
          ],
        },
      ],
    },
    {
      id: 8,
      name: 'Aircraft Operation',
      excerpt: 'Navigate the operational aspects of aircraft—understand the protocols and procedures for safe and efficient flights.',
      roadmap: [
        {
          title: 'Basics of flight operations.',
          contributors: ['Contributor 1'],
          body: [
            {
              text: 'Overview of flight operations.',
            },
            {
              text: 'Importance in aerospace engineering.',
            },
            // Add more items as needed
          ],
        },
        {
          title: 'Air traffic control and regulations.',
          contributors: ['Contributor 2'],
          body: [
            {
              text: 'Understanding air traffic control procedures.',
            },
            {
              text: 'Compliance with aviation regulations.',
            },
            // Add more items as needed
          ],
        },
        {
          title: 'Crew resource management.',
          contributors: ['Contributor 3'],
          body: [
            {
              text: 'Importance of effective crew resource management.',
            },
            // Add more items as needed
          ],
        },
        {
          title: 'Emergency procedures.',
          contributors: ['Contributor 4'],
          body: [
            {
              text: 'Procedures for handling emergencies during flight.',
            },
            // Add more items as needed
          ],
        },
        {
          title: 'Advanced flight planning.',
          contributors: ['Contributor 5'],
          body: [
            {
              text: 'Strategies for advanced flight planning.',
            },
            // Add more items as needed
          ],
        },
        {
          title: 'Operational efficiency.',
          contributors: ['Contributor 6'],
          body: [
            {
              text: 'Improving operational efficiency in flight operations.',
            },
            // Add more items as needed
          ],
        },
      ],
    },
    {
      id: 9,
      name: 'Aircraft Maintenance',
      excerpt: 'Discover the critical world of aircraft maintenance—learn about the meticulous care needed to keep flying machines in top condition.',
      roadmap: [
        {
          title: 'Basics of aircraft maintenance.',
          contributors: ['Contributor 1'],
          body: [
            {
              text: 'Overview of aircraft maintenance.',
            },
            {
              text: 'Importance in aerospace engineering.',
            },
            // Add more items as needed
          ],
        },
        {
          title: 'Introduction to inspections and checks.',
          contributors: ['Contributor 2'],
          body: [
            {
              text: 'Exploring inspections and checks in aircraft maintenance.',
            },
            // Add more items as needed
          ],
        },
        {
          title: 'Component-level maintenance.',
          contributors: ['Contributor 3'],
          body: [
            {
              text: 'Maintenance at the component level.',
            },
            // Add more items as needed
          ],
        },
        {
          title: 'Maintenance documentation and records.',
          contributors: ['Contributor 4'],
          body: [
            {
              text: 'Importance of documentation and records in maintenance.',
            },
            // Add more items as needed
          ],
        },
        {
          title: 'Advanced troubleshooting and diagnostics.',
          contributors: ['Contributor 5'],
          body: [
            {
              text: 'Advanced techniques for troubleshooting and diagnostics.',
            },
            // Add more items as needed
          ],
        },
        {
          title: 'Reliability-centered maintenance.',
          contributors: ['Contributor 6'],
          body: [
            {
              text: 'Implementing reliability-centered maintenance strategies.',
            },
            // Add more items as needed
          ],
        },
      ],
    },
    {
      id: 10,
      name: 'Astrodynamics',
      excerpt: 'Journey into astrodynamics—understand the principles governing the precise trajectories of spacecraft exploring the cosmos.',
      roadmap: [
        {
          title: 'Introduction to celestial mechanics.',
          contributors: ['Contributor 1'],
          body: [
            {
              text: 'Overview of celestial mechanics.',
            },
            {
              text: 'Importance in aerospace engineering.',
            },
            // Add more items as needed
          ],
        },
        {
          title: 'Basics of orbits and trajectories.',
          contributors: ['Contributor 2'],
          body: [
            {
              text: 'Fundamentals of orbits and trajectories.',
            },
            // Add more items as needed
          ],
        },
        {
          title: 'Orbital dynamics and perturbations.',
          contributors: ['Contributor 3'],
          body: [
            {
              text: 'Understanding orbital dynamics and perturbations.',
            },
            // Add more items as needed
          ],
        },
        {
          title: 'Launch and mission planning.',
          contributors: ['Contributor 4'],
          body: [
            {
              text: 'Strategies for launch and mission planning.',
            },
            // Add more items as needed
          ],
        },
        {
          title: 'Interplanetary mission design.',
          contributors: ['Contributor 5'],
          body: [
            {
              text: 'Designing missions for interplanetary exploration.',
            },
            // Add more items as needed
          ],
        },
        {
          title: 'Advanced celestial navigation.',
          contributors: ['Contributor 6'],
          body: [
            {
              text: 'Advanced techniques for celestial navigation.',
            },
            // Add more items as needed
          ],
        },
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
    console.log(name?.toLowerCase())
    return this.subjects.find((subject) => subject.name?.toLowerCase() === name?.toLowerCase());
  }
}
