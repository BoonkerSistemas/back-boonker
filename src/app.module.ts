import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {CertificadoController} from "./report/certificado.controller";
import {CertificadoService} from "./report/certificado.service";
import {PermissionModule} from "./permission/permission.module";
import {DatabaseModule} from "./common/modules/database/database.module";
import {UsersModule} from "./users/users.module";
import {AuthModule} from "./auth/auth.module";
import {StorageModule} from "./storage/storage.module";
import {BackendConfigModule} from "./config.module";
import { RoleModule } from './role/role.module';
import { ConfigModule } from '@nestjs/config';
import { ClientModule } from './client/client.module';
import { ProyectModule } from './proyect/proyect.module';
import { ProductModule } from './product/product.module';
import { SendProductModule } from './send-product/send-product.module';
import { FutureSendProyectModule } from './future-send-proyect/future-send-proyect.module';
import { BookProyectModule } from './book-proyect/book-proyect.module';
import { StockModule } from './stock/stock.module';
import { ResourceModule } from './resource/resource.module';
import { DirectoryModule } from './directory/directory.module';
import { ProductWarehouseModule } from './product-warehouse/product-warehouse.module';
import { FutureProyectModule } from './future-proyect/future-proyect.module';
import { PurchaseOrderModule } from './purchase-order/purchase-order.module';
import { ModulesModule } from './modules/modules.module';
import { SpareProductModule } from './spare-product/spare-product.module';
import { UnitsModule } from './units/units.module';
import { ProjectHouseModule } from './project-house/project-house.module';
import { DispactProductModule } from './dispact-product/dispact-product.module';
import { StockRealModule } from './stock-real/stock-real.module';
import { OrderProductModule } from './order-product/order-product.module';
import { BoardCanvaModule } from './board-canva/board-canva.module';
import { GenerateDispachModule } from './generate-dispach/generate-dispach.module';
import { ScheduleModule } from '@nestjs/schedule';
import { BoonkerIntWarehouseModule } from './boonker-int-warehouse/boonker-int-warehouse.module';
import { BoonkerIntWarehouseDispactModule } from './boonker-int-warehouse-dispact/boonker-int-warehouse-dispact.module';
import { BoonkerIntWarehouseRealModule } from './boonker-int-warehouse-real/boonker-int-warehouse-real.module';
import { BoonkerIntWarehouseIncomeModule } from './boonker-int-warehouse-income/boonker-int-warehouse-income.module';
import { BoonkerIntWarehouseProductModule } from './boonker-int-warehouse-product/boonker-int-warehouse-product.module';
import { VisitController } from './visist/visit.controller';
import { VisitService } from './visist/visit.service';
import { WebhoookModule } from './libro-obra/webhoook/webhoook.module';
import { StartEmployeModule } from './start-employe/start-employe.module';
import { CotaModule } from './cota/cota.module';
import { PayphoneModule } from './payphone/payphone.module';

@Module({
  imports: [
    BackendConfigModule.forRoot(),
    DatabaseModule,
    UsersModule,
    AuthModule,
    StorageModule,
    ScheduleModule.forRoot(),
    RoleModule,
    PermissionModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ClientModule,
    ProyectModule,
    ProductModule,
    SendProductModule,
    FutureSendProyectModule,
    BookProyectModule,
    StockModule,
    ResourceModule,
    DirectoryModule,
    ProductWarehouseModule,
    FutureProyectModule,
    PurchaseOrderModule,
    ModulesModule,
    SpareProductModule,
    UnitsModule,
    ProjectHouseModule,
    DispactProductModule,
    StockRealModule,
    OrderProductModule,
    BoardCanvaModule,
    GenerateDispachModule,
    BoonkerIntWarehouseModule,
    BoonkerIntWarehouseDispactModule,
    BoonkerIntWarehouseIncomeModule,
    BoonkerIntWarehouseRealModule,
    BoonkerIntWarehouseProductModule,
    WebhoookModule,
    StartEmployeModule,
    CotaModule,
    PayphoneModule,


  ],
  controllers: [AppController, CertificadoController, VisitController],
  providers: [AppService, CertificadoService, VisitService],
})
export class AppModule {}
