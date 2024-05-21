type Caracteristic = {
  name: string,
  description: string
}

type Image = {
  url: string,
  description: string
}

export class ProductEntity {
  constructor(
    private id: string,
    private userId: string,
    private name: string,
    private price: number,
    private quantity: number,
    private description: string,
    private caracteristics: Caracteristic[],
    private images: Image[],
    private category: string,
    private createdAt: Date,
    private updatedAt: Date,
  ) {}

  getId(): string {
    return this.id;
  }

  getUserId(): string {
    return this.userId;
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }

  getQuantity(): number {
    return this.quantity;
  }

  getDescription(): string {
    return this.description;
  }

  getCaracteristics(): Caracteristic[] {
    return this.caracteristics;
  }

  getImages(): Image[] {
    return this.images;
  }

  getCategory(): string {
    return this.category;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  setId(id: string): this {
    this.id = id;
    return this;
  }

  setUserId(userId: string): this {
    this.userId = userId;
    return this;
  }

  setName(name: string): this {
    this.name = name;
    return this;
  }

  setPrice(price: number): this {
    this.price = price;
    return this;
  }

  setQuantity(quantity: number): this {
    this.quantity = quantity;
    return this;
  }

  setDescription(description: string): this {
    this.description = description;
    return this;
  }

  setCaracteristics(caracteristics: Caracteristic[]): this {
    this.caracteristics = caracteristics;
    return this;
  }

  setImages(images: Image[]): this {
    this.images = images;
    return this;
  }

  setCategory(category: string): this {
    this.category = category;
    return this;
  }

  setCreatedAt(createdAt: Date): this {
    this.createdAt = createdAt;
    return this;
  }

  setUpdatedAt(updatedAt: Date): this {
    this.updatedAt = updatedAt;
    return this;
  }





}
