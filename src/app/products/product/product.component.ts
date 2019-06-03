import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() products: Product[] = [];
  @Input() productGroups: any[] = [];
  @Output() nameClicked: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  clickName(product: Product) {
    console.log("Parent; ProductComponent.clickName");
    this.nameClicked.emit(product);
  }

}
