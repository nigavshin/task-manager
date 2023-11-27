import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/product';
import { ProductsService } from '../../services/product.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  title = 'Task manager';
  products: IProduct[] = []
  loading = false
  term = ''

  constructor(public productsService: ProductsService, public modalService: ModalService) {

  }

  ngOnInit(): void {
    this.loading = true
    this.productsService.getAll().subscribe((products) => {
      this.loading = false
    })
  }

}
