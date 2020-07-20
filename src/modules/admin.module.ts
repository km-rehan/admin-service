import { Module } from "@nestjs/common";
import { AdminController } from "src/controllers/admin.controller";
import { AdminService } from "src/services/admin.service";
import { NoSqlModule } from "./no-sql.module";


@Module({
  controllers: [AdminController],
  imports: [
    NoSqlModule
  ],
  exports: [AdminService],
  providers: [AdminService]
})
export class AdminModule { }