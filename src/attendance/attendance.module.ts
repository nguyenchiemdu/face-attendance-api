import { Module } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { AttendanceController } from './attendance.controller';
import { PrismaService } from 'src/prisma.service';
import { MyWebSocketGateway } from 'src/event/event.gateway';

@Module({
  controllers: [AttendanceController],
  providers: [AttendanceService, PrismaService, MyWebSocketGateway],
})
export class AttendanceModule {}
