import calculateTotalSalesWithTax from "../exercises/ex08";

describe("calculateTotalSalesWithTax", () => {
  test("calculates total sales with tax for example 1", () => {
    const products = [
      { name: "Pencil", price: "CAD 10", quantitySold: 2 },
      { name: "Pen", price: "CAD 15", quantitySold: 3 },
      { name: "Notebook", price: "CAD 20", quantitySold: 1 },
    ];
    const taxRate = 10;
    const expectedTotal = "CAD 93.50";
    expect(calculateTotalSalesWithTax(products, taxRate)).toBe(expectedTotal);
  });

  test("calculates total sales with tax for example 2", () => {
    const products = [
      { name: "Apples", price: "CAD 25", quantitySold: 5 },
      { name: "Oranges", price: "CAD 30", quantitySold: 2 },
      { name: "Cucumber", price: "CAD 15", quantitySold: 3 },
    ];
    const taxRate = 8;
    const expectedTotal = "CAD 248.40";
    expect(calculateTotalSalesWithTax(products, taxRate)).toBe(expectedTotal);
  });

  test("calculates total sales with tax for example 3", () => {
    const products = [
      { name: "Milk", price: "CAD 12", quantitySold: 10 },
      { name: "Rice", price: "CAD 18", quantitySold: 4 },
      { name: "Beans", price: "CAD 22", quantitySold: 3 },
    ];
    const taxRate = 15;
    const expectedTotal = "CAD 296.70";
    expect(calculateTotalSalesWithTax(products, taxRate)).toBe(expectedTotal);
  });
});
