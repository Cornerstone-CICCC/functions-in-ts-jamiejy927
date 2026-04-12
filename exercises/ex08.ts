// Create an array of product objects, each with their name, price, and quantity sold.
// Additionally, you are given a tax rate as a percentage.
// Write a function called calculateTotalSalesWithTax that takes in an array of product objects, along with the tax rate, and returns the total sales amount including tax.

const calculateTotalSalesWithTax = () => {
  // Code here
};

export default calculateTotalSalesWithTax;

// Example usage:
const products: Product[] = [
  { name: "Pencil", price: "CAD 10", quantitySold: 2 },
  { name: "Pen", price: "CAD 15", quantitySold: 3 },
  { name: "Notebook", price: "CAD 20", quantitySold: 1 },
];
const taxRate = 10; //Equals to 10%

const totalSalesWithTax = calculateTotalSalesWithTax(products, taxRate);
console.log("Total sales amount including tax: ", totalSalesWithTax);
// console.log("Total sales amount including tax:", totalSalesWithTax); // Expected result: Total sales amount including tax: CAD 93.5

const products1: Product[] = [
  { name: "Apples", price: "CAD 25", quantitySold: 5 },
  { name: "Oranges", price: "CAD 30", quantitySold: 2 },
  { name: "Cucumber", price: "CAD 15", quantitySold: 3 },
];
const taxRate1 = 8; // Equals to 8%

const totalSalesWithTax1 = calculateTotalSalesWithTax(products1, taxRate1);
console.log("Total sales amount including tax: ", totalSalesWithTax1); // Expected output: "Total sales amount including tax (Example 1): CAD 248.40"

const products2: Product[] = [
  { name: "Milk", price: "CAD 12", quantitySold: 10 },
  { name: "Rice", price: "CAD 18", quantitySold: 4 },
  { name: "Beans", price: "CAD 22", quantitySold: 3 },
];
const taxRate2 = 15; // Equals to 15%

const totalSalesWithTax2 = calculateTotalSalesWithTax(products2, taxRate2);
console.log("Total sales amount including tax: ", totalSalesWithTax2); // Expected output: "Total sales amount including tax (Example 2): CAD 296.70"
