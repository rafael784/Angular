import { Component, OnInit, Input } from '@angular/core';
import { HadwareService } from '../service/hadware.service';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  key: number = 0;
  recebeComputador = [];
  computadoresFiltro = [];
  arrayFiltro = [];
  busca: string;

  constructor(private hardwareService: HadwareService, private route:Router) { }

  ngOnInit() {
    this.hardwareService.List().subscribe(data =>{
      localStorage.setItem('hardware', JSON.stringify(data));
      this.recebeComputador  = data;
      this.computadoresFiltro  = data;
    })
  }
  filtra(){
    this.recebeComputador = this.computadoresFiltro;
    this.arrayFiltro = this.recebeComputador.filter((obj) => {
      if(this.busca === "")
        return true;
      return obj.marca.toLowerCase() === this.busca.toLowerCase();
    });
    if(this.arrayFiltro.length > 0){
      this.recebeComputador = this.arrayFiltro;
    }
  }
  exclui(index){
    // this.recebeComputador.splice(index, 1);
    // console.log(index);
    // localStorage.setItem('hardware', JSON.stringify(this.recebeComputador));
    // document.getElementById('popup').style.display = 'none';
      console.log(this.recebeComputador[index].id)
      this.hardwareService.remove(this.recebeComputador[index].id).subscribe(data =>{
      console.log(data);
      this.route.navigate(["/"]);
    })

  }
  editar(index){
    localStorage.setItem('hardwareEdit', JSON.stringify(this.recebeComputador[index]));
    this.route.navigate(["/edicao-produto"]);
  }
  fechaPop(index){
    document.getElementById('popup').style.display = 'none';
  }
  detalhes(index){
    this.key = index;
    document.getElementById('popup').style.display = 'block';
  }
}
