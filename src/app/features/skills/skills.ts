import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsService, SkillGroup } from '../../services/skills.service'; // ajusta el path si es necesario

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class SkillsComponent implements OnInit {
  skills: SkillGroup[] = [];

  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.skillsService.getSkills().subscribe(data => {
      this.skills = data;
    });
  }
}