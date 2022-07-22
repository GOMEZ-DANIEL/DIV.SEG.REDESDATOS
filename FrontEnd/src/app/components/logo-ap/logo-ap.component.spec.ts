import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogopfaComponent } from './logo-ap.component';

describe('LogoApComponent', () => {
  let component: LogopfaComponent;
  let fixture: ComponentFixture<LogopfaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogopfaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogopfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
