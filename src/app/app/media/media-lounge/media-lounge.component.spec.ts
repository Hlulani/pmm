import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaLoungeComponent } from './media-lounge.component';

describe('MediaLoungeComponent', () => {
  let component: MediaLoungeComponent;
  let fixture: ComponentFixture<MediaLoungeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaLoungeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaLoungeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
