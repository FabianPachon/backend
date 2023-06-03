class ProductManager {
    constructor() {
      this.products = [];
    }
  
    getProducts() {
      return this.products;
    }
      addProduct(title, description, price, thumbnail, code, stock) {
      const existingProduct = this.products.find(product => product.code === code);
      if (existingProduct) {
      
      }
      
      const id = this.generateUniqueId();
  
      
      const newProduct = {
        id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      };
  
      
      this.products.push(newProduct);
  
      
      return id;
    }
  
    getProductById(id) {
      const product = this.products.find(product => product.id === id);
      if (!product) {
        throw new Error('Producto no encontrado');
      }
      return product;
    }
  
    generateUniqueId() {
      return Date.now().toString(36);
    }
  }
  
  const productManager = new ProductManager();
   
  console.log(productManager.getProducts()); // []
  
    const productId = productManager.addProduct(
    "producto prueba",
    "Este es un producto prueba",
    200,
    "Sin imagen",
    "abc123",
     25
  );
  
  console.log(productId); 
  
 
  console.log(productManager.getProducts());
  
  
  try {
    productManager.addProduct(
      "producto repetido",
      "Este producto tiene un código repetido",
      150,
      "Sin imagen",
      "abc123",
      10
    );
  } catch (error) {
    console.log(error.message);
  }
    
  const product = productManager.getProductById(productId);
  console.log(product);
  