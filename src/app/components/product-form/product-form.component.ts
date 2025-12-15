import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent {

  @Output() productoCreado = new EventEmitter<any>();

  formulario = new FormGroup({
    nombre: new FormControl(''),
    categoria: new FormControl(''),
    precio: new FormControl(0),
    descripcion: new FormControl(''),
    activo: new FormControl(true)
  });

  enviar() {
    this.productoCreado.emit(this.formulario.value);
    this.formulario.reset({
      nombre: '',
      categoria: '',
      precio: 0,
      descripcion: '',
      activo: true
    });
  }
}
