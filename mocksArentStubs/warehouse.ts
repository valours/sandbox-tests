export interface Product {
  name: string;
  quantity: number;
}

export class Warehouse {
  products: Product[] = [];

  public add(product: Product): void {
    const productStockedIndex = this.findIndex(product.name);
    if (productStockedIndex) {
      const { name, quantity } = this.products[productStockedIndex];
      this.products[productStockedIndex] = {
        name,
        quantity: quantity + product.quantity
      };
    } else {
      this.products.push(product);
    }
  }

  public find(productName: string): Product | null {
    if (this.hasProduct(productName)) {
      return this.products[this.findIndex(productName)];
    } else {
      console.log("trouve pas");
      return null;
    }
  }

  public hasProduct(productName: string): boolean {
    const productIndex = this.findIndex(productName);
    return productIndex > -1;
  }

  private findProductByName(name) {
    return (product: Product) => product.name === name;
  }

  private findIndex(productName: string): number | null {
    const index = this.products.findIndex(this.findProductByName(productName));
    return index > -1 ? index : null;
  }

  public removeProduct(producName: string): boolean {
    if (this.hasProduct(producName)) {
      this.products.splice(this.findIndex(producName), 1);
      return true;
    } else {
      return false;
    }
  }
}
