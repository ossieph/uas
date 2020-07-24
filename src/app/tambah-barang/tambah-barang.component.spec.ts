import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahBarangComponent } from './tambah-barang.component';

describe('TambahBarangComponent', () => {
  let component: TambahBarangComponent;
  let fixture: ComponentFixture<TambahBarangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahBarangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahBarangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
