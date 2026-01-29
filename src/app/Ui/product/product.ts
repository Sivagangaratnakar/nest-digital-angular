import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Apiservice } from '../../apiservice';

@Component({
  selector: 'app-product',
  imports: [RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
     //cards=Array(6);

     //title='flower'
     //text='a tiger standing in a forest filled with pink flowers'
    //cards=[
    //   {name:'Lillies' ,
    //    image:'https://cdn2.stylecraze.com/wp-content/uploads/2013/07/Beautiful-Flowers.jpg.webp'
     //  },{
      //  name:'Rose',
      //  image:'https://m.media-amazon.com/images/I/81OXEQrFPTL._AC_UF1000,1000_QL80_.jpg'
     //  } ]
 products:any[]=[];
 constructor(private apiservice:Apiservice){}


 ngOnInit()
 {
          this.apiservice.getProduct().subscribe((data:any)=>{
            this.products=data;
          });
 }



}
