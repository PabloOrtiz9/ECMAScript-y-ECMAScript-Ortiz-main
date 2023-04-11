class ProductManager {
  static id = 1;
  static products;
  constructor(title, description, price, thumbnail, code, stock) {
    ProductManager.id +=0;
    this.products = [];
    //this.product = product;
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
  }

  addProduct(product) {
    product = { ...product, id: ProductManager.id };
    let assignedCode = this.products.find(
      (product) => {
        return product.title === this.title;
        return product.description === this.description;
        return product.price === this.price;
        return product.thumbnail === this.thumbnail;
        return product.code === this.code;
        return product.stock === this.stock;
      }
    );
    if (!product.title || !product.description || !product.price ||
    !product.thumbnail || !product.code || !product.stock) {
    throw new Error('Todos los campos son obligatorios');
    } else product.id
      this.getProducts().length + 1;this.products.push(product);
      ProductManager.id++;
    
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    let searchID = id;
    let myProduct = null;
    this.products.forEach((product) => {
      if (product.id === searchID) {
        myProduct = product;
      }
    });
    if (myProduct === null) {
      return console.log("Este id", searchID, "no fue encontrado");
    } else {
      return console.log("Este id", searchID, "pertenece al producto ", myProduct.title);
    }
  }
}

const productList = new ProductManager();


const product1 = {
  title: "Camiseta",
  description: "Camiseta de la selección",
  price: 19.999,
  thumbnail: "https://assets.adidas.com/images/w_600,f_auto,q_auto/d88ae2138faf49be8f74aeca012c62eb_9366/Camiseta_Titular_Argentina_22_Messi_Blanco_HL8425_01_laydown.jpg",
  code: "ARG10",
  stock: 10,
};

const product2 = {
  title: "Short",
  description: "Short de la seleccion",
  price: 8.999,
  thumbnail: "https://sporting.vtexassets.com/arquivos/ids/560737/6HK8071-000-1.jpg?v=637931679922730000",
  code: "ARG10",
  stock: 8,
};

const product3 = {
  title: "Botines",
  description: "Botines futbol 11",
  price: 21.999,
  thumbnail: "https://pbs.twimg.com/media/Fgv6gXUXkAE6Kg1?format=jpg&name=900x900",
  code: "ARG10",
  stock: 4,
};


productList.addProduct(product1);
productList.addProduct(product2);
productList.addProduct(product3);


console.log("Cargando productos... ");
productList.addProduct(product1);
productList.addProduct(product2);
productList.addProduct(product3);

console.log("Lista de productos: ");
console.log(productList.getProducts());

console.log("Producto con ID = 2");
console.log(productList.getProductById(2));
