import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemsComponent } from './menu-items.component';

describe('NavComponent', () => {
  let component: MenuItemsComponent;
  let fixture: ComponentFixture<MenuItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
