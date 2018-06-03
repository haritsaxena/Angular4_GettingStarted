import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private _route: ActivatedRoute,
  private _router: Router) {
  }

  pageTitle : string = "Product Details";
  product : IProduct;
  
  ngOnInit() {
    let id = + this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product = {
      "productId" : id, 
      "productName" : "Leaf Rake",
      "productCode" : "string",
      "releaseDate" : "string",
      "price":  12,
      "description" : "string",
      "starRating": 2,
      "imageUrl": "string"
    };
  }

  onBack() : void {
	  this._router.navigate(['/products'])
  }


}
