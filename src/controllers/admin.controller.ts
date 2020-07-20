import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
import { DoctorType } from "src/models/doctor-type.model";
import { AdminService } from "src/services/admin.service";
import { DoctorServiceDto } from "../dtos/doctor-service.dto";


@Controller("admin")
export class AdminController {
  
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private readonly adminService: AdminService) {

  }

  @MessagePattern({
    cmd: 'save-doctors-type'
  })
  public async saveDoctorsType(doctorType: DoctorType): Promise<any> {
    try {
      const response = await this.adminService.saveDoctorType(doctorType);
      return response;
    } catch (exception) {
      throw exception;
    }
  }
  
  @MessagePattern({
    cmd: "save-doctors-services"
  })
  public async saveDoctorsService(doctorServiceDto: DoctorServiceDto): Promise<any> {
    try {
      const response = await this.adminService.saveDoctorService(doctorServiceDto);
      return response;
    } catch (exception) {
      throw exception;
    }
  }
}