import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: string;
  nombre: string;
  categoria: string;
  precio: number;
  activo: boolean;
  descripcion?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://jsonblob.com/api/1313446273633935360';

  private productosSubject = new BehaviorSubject<Product[]>([]);
  productos$ = this.productosSubject.asObservable();

  private productosInternos: Product[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  cargarProductos() {
    this.http.get<{ products: Product[] }>(this.apiUrl).subscribe({
      next: (res) => {
        this.productosInternos = res.products;
        this.productosSubject.next(this.productosInternos);
      },
      error: (err) => {
        console.error('Error cargando productos', err);
      }
    });
  }

  agregarProducto(datos: any) {
    const nuevoProducto: Product = {
      id: crypto.randomUUID(),
      nombre: datos.nombre,
      categoria: datos.categoria,
      precio: datos.precio,
      activo: datos.activo,
      descripcion: datos.descripcion
    };
    this.productosInternos = [nuevoProducto, ...this.productosInternos];
    this.productosSubject.next(this.productosInternos);
  }

  eliminarProducto(id: string) {
    this.productosInternos = this.productosInternos.filter(p => p.id !== id);
    this.productosSubject.next(this.productosInternos);
  }

  filtrarPorNombre(texto: string) {
    const resultado = this.productosInternos.filter(p =>
      p.nombre.toLowerCase().includes(texto.toLowerCase())
    );
    this.productosSubject.next(resultado);
  }
  
  filtrarPorCategoria(texto: string) {
    const resultado = this.productosInternos.filter(p =>
      p.categoria.toLowerCase().includes(texto.toLowerCase())
    );
    this.productosSubject.next(resultado);
  }
  
  filtrarPorActivo(soloActivos: boolean) {
    const resultado = soloActivos
      ? this.productosInternos.filter(p => p.activo)
      : this.productosInternos;
  
    this.productosSubject.next(resultado);
  }


}