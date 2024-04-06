import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationFonctionnementComponent } from './presentation-fonctionnement.component';
describe('PresentationFonctionnementComponent', () => {
  let component: PresentationFonctionnementComponent;
  let fixture: ComponentFixture<PresentationFonctionnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PresentationFonctionnementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PresentationFonctionnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
