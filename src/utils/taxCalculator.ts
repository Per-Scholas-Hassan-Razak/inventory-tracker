const calculateTax = (product: Product):number  =>  {
    return product.getPriceWithTax();
}

export default calculateTax;