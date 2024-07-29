import { Injectable } from '@nestjs/common';
import { CreateProductWarehouseDto } from './dto/create-product-warehouse.dto';
import { UpdateProductWarehouseDto } from './dto/update-product-warehouse.dto';

@Injectable()
export class ProductWarehouseService {
  create(createProductWarehouseDto: CreateProductWarehouseDto) {
    return 'This action adds a new productWarehouse';
  }

  findAll() {
    return `This action returns all productWarehouse`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productWarehouse`;
  }

  update(id: number, updateProductWarehouseDto: UpdateProductWarehouseDto) {
    return `This action updates a #${id} productWarehouse`;
  }

  remove(id: number) {
    return `This action removes a #${id} productWarehouse`;
  }
}
