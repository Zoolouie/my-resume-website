import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickableLinkBoxComponent } from './clickable-link-box.component';

describe('ClickableLinkBoxComponent', () => {
  let component: ClickableLinkBoxComponent;
  let fixture: ComponentFixture<ClickableLinkBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickableLinkBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickableLinkBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
