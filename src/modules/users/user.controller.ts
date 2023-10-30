import { Controller, Get, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { Request } from 'express';
import { User } from './entities/user.entity';

@ApiTags('Users')
@Controller('user')
@ApiBearerAuth()
export class UserController {
  constructor(private readonly usersService: UsersService) {}
  @Get('/profile')
  @ApiCreatedResponse({
    description: 'The record has been successfully gotten.',
    type: User,
  })
  getUserProfile(@Req() request: Request) {
    const id = request['user'].sub;
    return this.usersService.getUserById(id);
  }
}
