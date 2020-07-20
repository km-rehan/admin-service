import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { DoctorType } from "src/models/doctor-type.model";
import { NoSqlService } from "./no-sql.service";
import { DoctorServiceDto } from "../dtos/doctor-service.dto";


@Injectable()
export class AdminService {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private readonly nosqlService: NoSqlService) {

  }

  public async saveDoctorType(doctorTypeDto: DoctorType): Promise<any> {
    try {
      const doctorTypeModel = this.nosqlService.getDoctorTypeModel();
      const doctorType = new doctorTypeModel(doctorTypeDto).save()
      return {
        status: HttpStatus.CREATED,
        message: "Successfully added doctor type",
        doctorType: doctorType
      }
    } catch (exception) {
      throw exception;
    }
  }

  public async saveDoctorService(doctorServiceDto: DoctorServiceDto): Promise<any> {
    try {
      const doctorTypeModel = this.nosqlService.getDoctorTypeModel();
      const exisitingDoctor = await doctorTypeModel.findById(doctorServiceDto.doctorId);
      if (!exisitingDoctor) throw new HttpException("No doctor found", HttpStatus.NOT_FOUND);
      const updatedDoctor = await doctorTypeModel.findByIdAndUpdate(
        { _id: doctorServiceDto.doctorId },
        {
          $push: {
            services: { $each: doctorServiceDto.services },
            keywords: { $each: doctorServiceDto.keywords}
          }
        },
        { new: true, useFindAndModify: false }
      )
      return {
        status: HttpStatus.OK,
        message: "Successfully updated services for the doctor"
      }
    } catch (exception) {
      throw exception;
    }
  }
}