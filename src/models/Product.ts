class Product {
  public sku: string;
  public name: string;
  public price: number;
  public static taxRateNYC:number = 0.08875;

  constructor(sku: string, name: string, price: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }


  public displayDetails(): string{
    return `This is product: ${this.name}, SKU#: ${this.sku} and is priced at ${this.price}`;
  }

  getPriceWithTax() :number{
    return this.price * ( 1 + Product.taxRateNYC)
  }

}
