import { Component, OnInit } from '@angular/core';
import { Product } from './product/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public searchText: string = '';
  public products: Product[] = [
    { id: 1, name: 'PlayStation 3', price: 399, manufacturer:"Sony", hide: false },
    { id: 23, name: 'XBOX 360', price: 459, manufacturer:"Microsoft": hide: false }];
  public productGroups: any[] = [
    {
      saleProducts: this.products
    }
  ];

  constructor() { }

  ngOnInit() {
    
  }

  filterProduct(event) {
    this.products.forEach(product => {
      product.hide = false;
    });
    let searchStr = event.target.value.toLowerCase();
    this.products.filter(x => x.name.toLowerCase().indexOf(searchStr) === -1).forEach(product => {
      product.hide = true;
    });
    // this.courseList.forEach(course => {
    //   course.hide = false;
    // });
    // let searchStr = event.target.value.toLowerCase();
    // this.courseList.filter(x => x.classCode.toLowerCase().indexOf(searchStr) === -1 &&
    //   x.courseName.toLowerCase().indexOf(searchStr) == -1 &&
    //   x.pendingAttendanceDate.toLowerCase().indexOf(searchStr) == -1).forEach(course => {
    //     course.hide = true;
    //   });
  }

  nameClicked(product: Product): void {
    console.log("Container; ProductsComponent.nameClicked");
  }
}
