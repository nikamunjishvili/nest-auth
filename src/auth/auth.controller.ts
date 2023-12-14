import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Users } from './interface';
import { InputCreateExpenseDto } from './api.input';

@Controller('/api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/users')
  getUserData() {
    return this.authService.getUser();
  }

  @Get('/users/:userId')
  getUserId(@Param('userId') userId: string) {
    return this.authService.getUserId(parseInt(userId));
  }

  @Post('/signup')
  signUp(@Body() body: InputCreateExpenseDto) {
    return this.authService.createUser(body);
  }

  @Put('/update/:userId')
  updateUser(@Param('userId') userId: string, @Body() body: Users) {
    return this.authService.updateUser(parseInt(userId), body);
  }
  @Delete('/users/:userId')
  deleteUser(@Param('userId') userId: string) {
    return this.authService.deleteUser(parseInt(userId));
  }
}
