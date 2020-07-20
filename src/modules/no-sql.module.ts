import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { DoctorType, DoctorTypeSchema } from "src/models/doctor-type.model";
import { NoSqlService } from "src/services/no-sql.service";


@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: DoctorType.name,
        schema: DoctorTypeSchema
      }
    ])
  ],
  exports: [NoSqlService],
  providers: [NoSqlService]
})
export class NoSqlModule { }