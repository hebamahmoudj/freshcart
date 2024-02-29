

export interface  Product { 
  
     _id?:string;
    
    title:           string;
    price:           number;
    imageCover:      string;
    category:        Brand;
    ratingsAverage:  number;
   
}

export interface Brand {

    name:      string;
   
}