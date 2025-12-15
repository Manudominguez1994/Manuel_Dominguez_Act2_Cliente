import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../services/product.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html'
})
export class ProductCardComponent {

  @Input() product!: Product;

  constructor(private productService: ProductService) {}

  eliminar() {
    this.productService.eliminarProducto(this.product.id);
  }
}
