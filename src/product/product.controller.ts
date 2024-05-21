import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductRepository } from "./product.repository";
import { CreateProductDTO } from "./DTO/create-product.dto";
import { UpdateProductDTO } from "./DTO/update-product.dto";
import { ProductEntity } from "./product.entity";
import { v4 as uuid } from "uuid";

@Controller('/products')
export class ProductController {
  constructor(private productRepository: ProductRepository){}

  @Post()
  async createProduct(@Body() product: CreateProductDTO) {
    const productEntity = new ProductEntity(
      uuid(),
      product.userId,
      product.name,
      product.price,
      product.quantity,
      product.description,
      product.caracteristics,
      product.images,
      product.category,
      new Date(),
      new Date(),
    )

    this.productRepository.create(productEntity);

    return {
      product: productEntity,
      message: 'Success! Product created!',
    };
  }

  @Get()
  async getProducts(): Promise<ProductEntity[]>{
    return this.productRepository.get();
  }



  @Patch('/:id')
  async updateProduct(@Param('id') id: string, @Body() productUpdatedData: UpdateProductDTO){
    const product = await this.productRepository.update(id, productUpdatedData as Partial<ProductEntity>);

    return {
      product: product,
      message: "Success! Product updated!"
    }
  }

  @Delete('/:id')
  async deleteProduct(@Param('id') id: string){
    this.productRepository.delete(id);
    return{
      message: 'Success! Product deleted!'
    }
  }
}
