import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HadwareService } from '../service/hadware.service';

@Component({
  selector: 'app-edicao-produto',
  templateUrl: './edicao-produto.component.html',
  styleUrls: ['./edicao-produto.component.css']
})
export class EdicaoProdutoComponent implements OnInit {
  computadores: any = [];
  flag = false;
 

constructor(private hardwareService: HadwareService, private route:Router) { }

  ngOnInit() {
    
    if (localStorage.getItem('hardwareEdit')) this.computadores = JSON.parse(localStorage.getItem('hardwareEdit'));
  }

  onSubmit(form){
    if(
      form.value.marca == undefined ||
      form.value.modelo == undefined ||
      form.value.mobo == undefined || 
      form.value.ram == undefined || 
      form.value.hdTamanho == undefined ||
      form.value.hdMarca == undefined || 
      form.value.cpu == undefined || 
      form.value.veloCpu == undefined || 
      form.value.foto == undefined
    ){
     
      
    }else{
      
      this.flag = false;
      
      //localStorage.setItem('computadores', JSON.stringify(this.computadores)); 
       console.log(this.computadores.id);

        this.hardwareService.edit(form.value, this.computadores.id).subscribe(data =>{
        this.route.navigate(["/catalogo"],
        
        );
      })

    }
  }

}
