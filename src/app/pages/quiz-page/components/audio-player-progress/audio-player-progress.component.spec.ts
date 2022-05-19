import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioPlayerProgressComponent } from './audio-player-progress.component';

describe('AudioPlayerProgressComponent', () => {
  let component: AudioPlayerProgressComponent;
  let fixture: ComponentFixture<AudioPlayerProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioPlayerProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioPlayerProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
