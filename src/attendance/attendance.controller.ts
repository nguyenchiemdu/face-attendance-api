import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Attendance } from './entities/attendance.entity';

@ApiTags('Attendance')
@Controller('attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Post()
  @ApiBody({ type: CreateAttendanceDto })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: Attendance,
  })
  create(@Body() createAttendanceDto: CreateAttendanceDto) {
    return this.attendanceService.upsert(createAttendanceDto);
  }

  @Get()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: [Attendance],
  })
  findAll() {
    return this.attendanceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attendanceService.findOne(+id);
  }

  @Patch(':id')
  @ApiBody({ type: UpdateAttendanceDto })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: Attendance,
  })
  update(
    @Param('id') id: string,
    @Body() updateAttendanceDto: UpdateAttendanceDto,
  ) {
    return this.attendanceService.update(id, updateAttendanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attendanceService.remove(+id);
  }
}
