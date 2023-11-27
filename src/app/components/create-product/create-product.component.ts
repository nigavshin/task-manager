import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/product.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  constructor(private productsService: ProductsService, private modelService: ModalService) { }

  public form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ])
  })

  get title() {
    return this.form.controls.title
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.form.value)

    this.productsService.create({
      title: this.form.value.title as string,
      price: 0,
      description: 'test',
      category: 'test',
      image: 'http://placekitten.com/200/300',
      rating: {
        rate: 0,
        count: 0
      }
    }).subscribe(() => {
      this.modelService.close()
    })
  }

}
