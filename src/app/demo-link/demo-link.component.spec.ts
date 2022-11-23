import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoLinkComponent } from './demo-link.component';

describe('DemoLinkComponent', () => {
  let component: DemoLinkComponent;
  let fixture: ComponentFixture<DemoLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
