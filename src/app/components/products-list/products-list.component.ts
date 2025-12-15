import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../../services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent {

  productos: Product[] = [];

  constructor(private productService: ProductService) {
    this.productService.productos$.subscribe(lista => {
      this.productos = lista;
    });
  }
}
