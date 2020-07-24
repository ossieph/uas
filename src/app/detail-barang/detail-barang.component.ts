import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-detail-barang',
  templateUrl: './detail-barang.component.html',
  styleUrls: ['./detail-barang.component.css']
})
export class DetailBarangComponent implements OnInit {
  constructor(public dialogRef:MatDialogRef<DetailBarangComponent>,
    @Inject(MAT_DIALOG_DATA) public data :any) { }

  ngOnInit() {
  }

}
