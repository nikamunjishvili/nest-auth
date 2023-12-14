import { IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class InputCreateExpenseDto {
  @IsEmpty()
  id: number;

  @IsNotEmpty()
  @IsString()
  userName: string;

  @IsNotEmpty() 
  email: string;

  @IsNotEmpty() 
  password: string; 
  
  @IsEmpty()
  addDate: number;
}
