import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(products: Product[], searchword:string):Product[] {
    return products.filter((item)=>item.title.toLocaleLowerCase().includes(searchword.toLocaleLowerCase()));
  }

}
