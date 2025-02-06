import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
  export interface ResumeComponent {
    name: string;
    role: string;
    experience: string[];
    education: string[];
    skills: string[];
  }
  

