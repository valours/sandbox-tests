import { Product, Warehouse } from "../warehouse";

describe("warehouse", () => {
  xit("should stock product added", () => {
    // given
    const product: Product = {
      name: "truc",
      quantity: 12
    };

    // then
    const warehouse = new Warehouse();
    warehouse.add(product);

    // when
    expect(warehouse.products).toContain(product);
  });

  it("should find product stocked", () => {
    // given
    const product: Product = {
      name: "truc",
      quantity: 12
    };
    const warehouse = new Warehouse();
    warehouse.add(product);

    // then & when
    expect(warehouse.find(product.name)).toEqual(product);
  });

  it("shouldn't find product then has removed", () => {
    // given
    const product: Product = {
      name: "truc",
      quantity: 12
    };
    const warehouse = new Warehouse();
    warehouse.products.push(product);

    // then
    warehouse.removeProduct(product.name);
    console.log(warehouse.products);

    // when
    expect(warehouse.find(product.name)).toBeNull();
  });
});
