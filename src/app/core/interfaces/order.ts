

export interface CartItem {
    count:   number;
    product: Product;
    price:   number;
    _id:     string;
}

export interface Product {
    subcategory:     Brand[];
    ratingsQuantity: number;
    _id:             string;
    title:           string;
    imageCover:      string;
    category:        Brand;
    brand:           Brand;
    ratingsAverage:  number;
    id:              string;
}

export interface Brand {
    _id:       string;
    name:      string;
    slug:      string;
    image?:    string;
    category?: string;
}
