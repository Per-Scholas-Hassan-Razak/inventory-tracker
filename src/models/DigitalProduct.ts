class DigitalProduct extends Product {
  public fileSize: number;

  constructor(sku: string, name: string, price: number, fileSize: number) {
    super(sku, name, price);
    this.fileSize = fileSize;
  }

  public override getPriceWithTax(): number {
    return this.price;
  }

  public get digitalProductFileSize(): string {
    return `${this.fileSize} MB`;
  }
}
