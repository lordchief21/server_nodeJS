export default class Course {
    private readonly courseName: string;
    private readonly description: string;
    private price: number;
    private readonly courseImage: string;
    private isDisabled: boolean;
  
    constructor(courseName: string, description: string, price: number, courseImage: string, isDisabled: boolean) {
      if (price <= 0) {
        throw new Error('Price cannot be less than or equal to 0');
      }
  
      this.courseName = courseName;
      this.description = description;
      this.price = price;
      this.courseImage = courseImage;
      this.isDisabled = isDisabled;
    }
  
    // Calculate total price by adding taxes
    calculateTotalPrice(taxes: number[]): number {
      const totalTaxes = taxes.reduce((accum, currentTax) => {
        if (currentTax < 0) throw new Error('Tax cannot be negative');
        return accum + currentTax;
      }, 0);
  
      return this.price + totalTaxes;
    }
  
    // Getter for courseName
    getCourseName(): string {
      return this.courseName;
    }
  
    // Getter for description
    getDescription(): string {
      return this.description;
    }
  
    // Getter for price
    getPrice(): number {
      return this.price;
    }
  
    // Getter for courseImage
    getCourseImage(): string {
      return this.courseImage;
    }
  
    // Getter for isDisabled
    getIsDisabled(): boolean {
      return this.isDisabled;
    }
  
    // Setter for price (with validation)
    setPrice(newPrice: number): void {
      if (newPrice <= 0) throw new Error('Price cannot be less than or equal to 0');
      this.price = newPrice;
    }
  
    // Method to disable or enable the course
    disableCourse(disable: boolean): void {
      this.isDisabled = disable;
    }
  }