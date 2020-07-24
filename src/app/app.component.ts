import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ApiService} from './api.service';
import { TambahBarangComponent } from './tambah-barang/tambah-barang.component';
import { DetailBarangComponent } from './detail-barang/detail-barang.component';
import {DialogKonfirmasiComponent} from './dialog-konfirmasi/dialog-konfirmasi.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(
  public dialog:MatDialog,
  public api:ApiService
  )
  {
  	this.getData();
  }
	dataBarang:any=[];
  	getData()
  {
    this.api.baca().subscribe(res=>{
      this.dataBarang=res;
    })
  }

  buatBarang()
  {
		const dialogRef = this.dialog.open(TambahBarangComponent, {
			width: '450px',
			data:null      
		});
		dialogRef.afterClosed().subscribe(result => {
      		this.getData();     
		});
  	}
  detailBarang(item)
	{
	    const dialogRef = this.dialog.open(DetailBarangComponent, {
	      width: '450px',
	      data:item    
	    });	
	    dialogRef.afterClosed().subscribe(result => {
	      console.log('The dialog was closed');     
	    });
	  }
	editBarang(data)
	  {
	    const dialogRef = this.dialog.open(TambahBarangComponent, {
	      width: '450px',
	      data:data
	    });
	    dialogRef.afterClosed().subscribe(result => {
	      this.getData();    
	    });
	  }
	konfirmasiHapus(id)
 		 		{
		const dialogRef = this.dialog.open(DialogKonfirmasiComponent, {
			width: '450px',      
		});
		dialogRef.afterClosed().subscribe(result => {
			if(result == true)
			{
				console.log('Menghapus data');
					this.api.hapus(id).subscribe(res=>{
					this.getData();
					})
			}
		});
 		}
}
