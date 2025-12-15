import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductService } from './services/product.service';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ProductsListComponent,
    ProductFormComponent,
    ProductFilterComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private productService: ProductService) {}

  onProductoCreado(datos: any) {
    this.productService.agregarProducto(datos);
  }
}
