import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-filter.component.html'
})
export class ProductFilterComponent {

  constructor(private productService: ProductService) {}

  cambiarNombre(event: Event) {
    const valor = (event.target as HTMLInputElement).value;
    this.productService.filtrarPorNombre(valor);
  }

  cambiarCategoria(event: Event) {
    const valor = (event.target as HTMLInputElement).value;
    this.productService.filtrarPorCategoria(valor);
  }

  cambiarActivo(event: Event) {
    const marcado = (event.target as HTMLInputElement).checked;
    this.productService.filtrarPorActivo(marcado);
  }
}
