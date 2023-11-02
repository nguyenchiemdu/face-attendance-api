import { Injectable } from '@nestjs/common';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { PrismaService } from 'src/prisma.service';
import { MyWebSocketGateway } from 'src/event/event.gateway';

@Injectable()
export class AttendanceService {
  constructor(
    private prisma: PrismaService,
    private readonly myWebSocketGateway: MyWebSocketGateway,
  ) {}
  create(createAttendanceDto: CreateAttendanceDto) {
    return this.prisma.attendance.create({
      data: createAttendanceDto,
    });
  }

  findAll() {
    return this.prisma.attendance.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} attendance`;
  }

  update(id: string, updateAttendanceDto: UpdateAttendanceDto) {
    return this.prisma.attendance.update({
      where: { id: id },
      data: updateAttendanceDto,
    });
  }
  async upsert(createAttendanceDto: CreateAttendanceDto) {
    this.myWebSocketGateway.emitValueToClient(createAttendanceDto);
    // const data = await this.prisma.attendance.findFirst({
    //   where: { userId: createAttendanceDto.userId },
    // });
    // if (data == undefined) {
    //   const result = await this.create(createAttendanceDto);
    //   this.myWebSocketGateway.emitValueToClient({ message: 'Hello, client!' });
    //   return result;
    // }

    // const result = await this.prisma.attendance.update({
    //   where: { id: data.id },
    //   data: createAttendanceDto,
    // });
    // this.myWebSocketGateway.emitValueToClient({ message: 'Hello, client!' });
    // return result;
  }

  remove(id: number) {
    return `This action removes a #${id} attendance`;
  }
}
