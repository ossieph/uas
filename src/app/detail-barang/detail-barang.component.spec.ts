import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBarangComponent } from './detail-barang.component';

describe('DetailBarangComponent', () => {
  let component: DetailBarangComponent;
  let fixture: ComponentFixture<DetailBarangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailBarangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBarangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
