import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErddComponent } from './erdd.component';

describe('ErddComponent', () => {
  let component: ErddComponent;
  let fixture: ComponentFixture<ErddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
