import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeePlayerComponent } from './see.player.component';

describe('SeePlayerComponent', () => {
  let component: SeePlayerComponent;
  let fixture: ComponentFixture<SeePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeePlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
