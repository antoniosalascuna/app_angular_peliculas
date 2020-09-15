import { ApiserviceService } from './../../services/apiservice.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-listardatos',
  templateUrl: './listardatos.component.html',
  styleUrls: ['./listardatos.component.css']
})
export class ListardatosComponent implements OnInit {
  displayedColumns: string[] = ['Titulo', 'Imagen', 'Detalle'];
  dataSource = null;
  constructor(private api: ApiserviceService) { }
datos: any ;
dato: any ;
results: any = {
  companies: '',
  names: '',
  titles: ''
 };
  mostrardatos()
  {
    this.dato = ((document.getElementById('input') as HTMLInputElement).value);
    console.log(this.dato);
    this.api.obtenerdatos(this.dato).subscribe(result => {
    this.results  = result;
    this.dataSource = new MatTableDataSource(result.titles);
    console.log(this.results);
    });
  }
  ngOnInit(): void {
  }

  cargardatos()
  {
    if (this.results !== undefined) {
    }
  }

  enviarid(id: any){
    if (this.results !== undefined) {
      this.api.setid(id);
    }
  }

}
