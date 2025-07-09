import DigitalProduct from "./models/DigitalProduct";
import PhysicalProduct from "./models/PhysicalProduct";
import Product from "./models/Product";


const iPhone = new PhysicalProduct("#123HGH", "IPHONE 16", 1000, 0.25);
const netflixSubscription = new DigitalProduct("#101010101011010", "Basic Netflix", 7.99, 100);


const products: Product[] = [iPhone, netflixSubscription];

products.forEach(product => {
  console.log(product.displayDetails());
  console.log(`Final Price: $${product.getPriceWithTax().toFixed(2)}`);
    if (product instanceof PhysicalProduct) {
    console.log(`Weight: ${product.physicalProductWeight}`); 
  } else if (product instanceof DigitalProduct) {
    console.log(`File Size: ${product.digitalProductFileSize}`);  
  }

  console.log("---");
});

