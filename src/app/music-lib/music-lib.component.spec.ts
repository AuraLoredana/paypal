import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicLibComponent } from './music-lib.component';

describe('MusicLibComponent', () => {
  let component: MusicLibComponent;
  let fixture: ComponentFixture<MusicLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
