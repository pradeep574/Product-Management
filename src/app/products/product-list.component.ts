import { componentFactoryName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './Product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list-component.css']
})
export class ProductListComponent implements OnInit {

    pageTitle: string = "Product List";
    imageMargin: number = 2;
    imageWidth: number = 50;
    showImage: boolean = false;
    showContent: boolean = true;
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[];

    constructor(private productService:ProductService) {
        //this.filteredProducts = this.products;
        //this.listFilter = ' ';
    }
    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    toogleContent(): void {
        this.showContent = !this.showContent;
    }
    
    onRatingClicked(message: string): void {
        this.pageTitle = "Product List: " + message;
    }
    onRatingHovered(messag: string): void {
        this.pageTitle = "Star: " + messag;
    }
    ngOnInit(): void {
        console.log("In OnInit");
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products;
    }
}