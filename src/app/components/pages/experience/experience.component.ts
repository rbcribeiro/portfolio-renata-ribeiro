import { Component, OnInit } from '@angular/core';
import { ExperiencesService } from '../../../service/experiences.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  experiences: any[] = [];
  expanded: number | null = null;

  constructor(private experiencesService: ExperiencesService) {}

  ngOnInit() {
    this.experiences = this.experiencesService.getExperiences();
  }

  toggleExperienceDetails(index: number) {
    if (this.expanded === index) {
      this.expanded = null;
    } else {
      this.expanded = index;
    }
  }
}
