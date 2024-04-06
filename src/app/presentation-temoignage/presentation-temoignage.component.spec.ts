import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationTemoignageComponent } from './presentation-temoignage.component';

describe('PresentationTemoignageComponent', () => {
  let component: PresentationTemoignageComponent;
  let fixture: ComponentFixture<PresentationTemoignageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PresentationTemoignageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PresentationTemoignageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
