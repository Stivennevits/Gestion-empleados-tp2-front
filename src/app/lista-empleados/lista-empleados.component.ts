import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';


@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  empleados: Empleado[];

  constructor() { }


  ngOnInit(): void {
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
  }

}
