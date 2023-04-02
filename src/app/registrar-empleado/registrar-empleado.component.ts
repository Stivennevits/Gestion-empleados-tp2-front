import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Component({  
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {

  empleado : Empleado = new Empleado();

  constructor(private empleadoServicio:EmpleadoService, private router:Router) { }

  ngOnInit(): void {
  }


  guardarEmpleado(){
    this.empleadoServicio.registrarEmpleado(this.empleado).subscribe(
      dato => {
        console.log(dato);
        this.irListaEmpleados();
      },
      error => {
        console.log(error);
       
      }
    );
  }

  irListaEmpleados(){
    this.router.navigate(['/empleados']);
  }

  onSubmit(){
    this.guardarEmpleado();
  }
}


/*
  guardarEmpleado(){
  this.empleadoServicio.registrarEmpleado(this.empleado).pipe(
    tap(dato => console.log(dato)),
    catchError(error => {
      console.log(error);
      return of(null);
    })
  ).subscribe(resultado => {
    if (resultado) {
      this.irListaEmpleados();
    }
  });
}
*/