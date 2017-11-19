import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WadoComponent } from './wado.component';

describe('WadoComponent', () => {
  let component: WadoComponent;
  let fixture: ComponentFixture<WadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
