import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { DoctorType } from "src/models/doctor-type.model";
import { Model } from "mongoose";


@Injectable()
export class NoSqlService { 

  constructor(
    @InjectModel(DoctorType.name) private readonly doctorTypeMode: Model<DoctorType>
  ) {
    
  }

  public getDoctorTypeModel(): Model<DoctorType> {
    return this.doctorTypeMode;
  }
}