export default class Course {
    private readonly courseName: string;
    private readonly description: string;
    private price: number;
    private readonly courseImage: string;
    private isDisabled: boolean;
    private courseId? : string ;
  
    constructor(courseName: string, description: string, price: number, courseImage: string, isDisabled: boolean, courseId?:string) {
      if (price <= 0) {
        throw new Error('Price cannot be less than or equal to 0');
      }
      
      this.courseId = courseId;
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
        currentTax = currentTax * this.price
        return accum + currentTax;
      }, 0);
  
      return this.price + totalTaxes;
    }
  
    // Getter for courseName
    get getCourseName(): string {
      return this.courseName;
    }
  
    // Getter for description
    get getDescription(): string {
      return this.description;
    }
  
    // Getter for price
    get getPrice(): number {
      return this.price;
    }
  
    // Getter for courseImage
    get getCourseImage(): string {
      return this.courseImage;
    }
  
    // Getter for isDisabled
    get getIsDisabled(): boolean {
      return this.isDisabled;
    }

    //Getter for CourseId
    get getCourseId(): string {
      if(this.courseId == undefined) throw Error('Course not found')
        return this.courseId;
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