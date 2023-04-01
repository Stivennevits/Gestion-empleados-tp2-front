import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';


@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  empleados: Empleado[];

  constructor(private empleadoServicio:EmpleadoService, private router:Router) { }


  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  actualizarEmpleado(id:number){
    this.router.navigate(["actualizar-empleado", id])
  }

  eliminarEmpelado(id:number){
    this.empleadoServicio.eliminarEmpelado(id).subscribe(dato=>{
      console.log(dato);
      this.obtenerEmpleados();
    })
  }

  private obtenerEmpleados(){
    this.empleadoServicio.obtenerListaDeEmpleados().subscribe(dato=> {
      this.empleados = dato;
    })
  }

  verDetallesDelEmpleado(id:number){
    this.router.navigate(['empleado-detalles', id])
  }

}




/*
this.empleados = [{
      "id" : 1,
      "nro_documento" : 10368794,
      "nombre" : "sti",
      "apellido": "ven",
      "email": "asdd@ass.com",
      "fecha_nacimiento": new Date('1996-07-16'),
      "fecha_ingreso": new Date('2023-03-30'),
      "fecha_creacion": new Date()
      
    },
    {
      "id" : 2,
      "nro_documento" : 103694,
      "nombre" : "sasti",
      "apellido": "vsdden",
      "email": "asaaadd@ass.com",
      "fecha_nacimiento": new Date('1996-07-16'),
      "fecha_ingreso": new Date('2023-03-30'),
      "fecha_creacion": new Date()
      
    }
  ];
  }*/