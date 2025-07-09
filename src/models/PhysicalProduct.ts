class PhysicalProduct extends Product{
    public weight:number;

    constructor(sku: string, name: string, price: number, weight: number){
        super(sku, name, price);
        this.weight = weight;
    }

    public override getPriceWithTax(): number {
        return this.price * 1.10;
    }

    public get physicalProductWeight(): string{
       return `${this.weight} kg`;     
    }
}