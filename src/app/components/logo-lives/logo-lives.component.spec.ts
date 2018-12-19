import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoLivesComponent } from './logo-lives.component';

describe('LogoLivesComponent', () => {
  let component: LogoLivesComponent;
  let fixture: ComponentFixture<LogoLivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoLivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoLivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
