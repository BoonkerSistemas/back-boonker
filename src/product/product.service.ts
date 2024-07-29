import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schema/product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private readonly permissionModel: Model<ProductDocument>,
  ) {}

  async create(createRegionDto: CreateProductDto): Promise<Product> {
    return this.permissionModel.create(createRegionDto);
  }

  async findAll(): Promise<any> {
    //////console.log("aquiiiiii")
    return this.permissionModel.find().exec();
  }

  async findOne(id: string): Promise<Product> {
    return this.permissionModel.findOne({ _id: id }).exec();
  }

  async findProduct(product: string): Promise<any> {
    return this.permissionModel.find({ DESCRIPCION: product }).exec();
  }

  async update(id: string, updateRegionDto: UpdateProductDto): Promise<Product> {
    return this.permissionModel.findOneAndUpdate({ _id: id }, updateRegionDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.permissionModel.findByIdAndDelete({ _id: id }).exec();
  }
}
