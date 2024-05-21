import { Injectable } from '@nestjs/common';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductRepository {
  private products: ProductEntity[] = [];

  async create(product: ProductEntity) {
    this.products.push(product);
  }

  async get(): Promise<ProductEntity[]> {
    return this.products;
  }

  private getById(id: string): ProductEntity {
    const possibleProduct = this.products.find(
      (products) => products.getId() === id,
    );

    if (!possibleProduct) {
      throw new Error("Product don't exits");
    }

    return possibleProduct;
  }

  async update(id: string, productUpdated: Partial<ProductEntity>): Promise<ProductEntity> {
    const product = this.getById(id);

    Object.entries(productUpdated).forEach(([key, value]) => {
      if (key == 'id') {
        return;
      }

      product[key] = value;
    });

    return product;
  }

  async delete(id: string){
    this.products = this.products.filter(product => product.getId() !== id);
  }
}
