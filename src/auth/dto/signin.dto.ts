import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SignInDto {
  @IsString()
  @ApiProperty({ default: 'Alice' })
  username: string;
  @IsString()
  @ApiProperty({ default: '123456' })
  password: string;
}
