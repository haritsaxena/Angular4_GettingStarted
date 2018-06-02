import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html'
})

export class ProductListComponent implements OnInit  {
    
    pageTitle: string = 'Product List';
    imageWidth : number = 30;
    imageMargin : number = 1;
    showImage : boolean = false;
    filteredProducts : IProduct[];
    _listFilter: string;
    errorMessage : string 
    
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products; 
    }
    
    products : IProduct[] 
    
    constructor(private _productService: ProductService){
        //this.listFilter = 'cart';
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
              product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    
    toggleImage() : void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message:string) : void {
        console.log(`recieved event : ${message}`);
    }

    ngOnInit(): void {
         this._productService.getProducts().subscribe
            (
                products => {
                    this.products = products,
                    this.filteredProducts = products
                },
                error => this.errorMessage = <any> error 
            );

        
        //this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }   
}