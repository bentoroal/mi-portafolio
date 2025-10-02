import { ComponentFixture, TestBed } from '@angular/core/testing';

import * as aboutMe from './aboutme';

describe('AboutMe', () => {
  let component: aboutMe.AboutMeComponent;
  let fixture: ComponentFixture<aboutMe.AboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [aboutMe.AboutMeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(aboutMe.AboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
