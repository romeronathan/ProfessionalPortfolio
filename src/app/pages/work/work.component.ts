import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/types/project';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  projects: Project[] = [];
  constructor() { }

  ngOnInit(): void {
    this.projects.push({
      name: 'St. Clair Google Developer Student Club',
      description: 'This is a project description',
      tags: ['tag1', 'tag2'],
      link: 'https://www.google.com',
      img: '../../assets/images/onetenacity.JPG'
    }
    );
    this.projects.push({
      name: 'St. Clair Google Developer Student Club',
      description: 'This is a project description',
      tags: ['tag1', 'tag2'],
      link: 'https://www.google.com',
      img: '../../assets/images/onetenacity.JPG'
    }
    );
    
    this.projects.push({
      name: 'One Tenacity',
      description: 'This is a project description',
      tags: ['tag1', 'tag2'],
      link: 'https://www.google.com',
      img: '../../assets/images/stclair.JPG'
    }
    );
    this.projects.push({
      name: 'One Tenacity',
      description: 'This is a project description',
      tags: ['tag1', 'tag2'],
      link: 'https://www.google.com',
      img: '../../assets/images/stclair.JPG'
    }
    );
    this.projects.push({
      name: 'One Tenacity',
      description: 'This is a project description',
      tags: ['tag1', 'tag2'],
      link: 'https://www.google.com',
      img: '../../assets/images/stclair.JPG'
    }
    );
    this.projects.push({
      name: 'One Tenacity',
      description: 'This is a project description',
      tags: ['tag1', 'tag2'],
      link: 'https://www.google.com',
      img: '../../assets/images/stclair.JPG'
    }
    );
  }

}
