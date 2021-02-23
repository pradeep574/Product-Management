import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../products/Product';
import { Router } from '@angular/router';
import { ProductService } from '../products/product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string =  "Product Detail";
  product:IProduct | undefined;
  errorMessage = '';

  constructor(private router:Router,private route:ActivatedRoute,private productService:ProductService) {
   }

   OnBack():void{
     this.router.navigate(['/products']);
   }

  ngOnInit(): void {
    let param = this.route.snapshot.paramMap.get('id');
    if(param){
      const id = +param
      this.getProduct(id);
    } 
  }

  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }

}
