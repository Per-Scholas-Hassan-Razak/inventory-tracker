import Product from "../models/Product";

const calculateTax = (product: Product):number  =>  {
    return product.getPriceWithTax();
}

export default calculateTax;