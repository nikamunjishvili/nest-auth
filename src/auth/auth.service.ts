import { Injectable } from '@nestjs/common';
import { Users } from './interface';

@Injectable()
export class AuthService {
  private readonly userData = [
    {
      id: 1,
      userName: 'nika',
      email: 'nika@gmail.com',
      password: '21314434343',
      addDate: parseInt(new Date().getTime().toString()),
    },
    {
      id: 2,
      userName: 'luka',
      email: 'luka@gmail.com',
      password: '44343334343',
      addDate: parseInt(new Date().getTime().toString()),
    },
    {
      id: 3,
      userName: 'saba',
      email: 'saba1@gmail.com',
      password: '44004023002',
      addDate: parseInt(new Date().getTime().toString()),
    },
  ];

  getUser(): object[] {
    return this.userData;
  }

  getUserId(id: number) {
    return this.userData.find((user) => user.id === id);
  }

  createUser(data: Users) {
    const newUser = {
      id: this.userData.length + 1,
      userName: data.userName,
      email: data.email,
      password: data.password,
      addDate: parseInt(new Date().getTime().toString()),
    };
    this.userData.push(newUser);
    return newUser;
  }
  updateUser(id: number, data: Users) {
    const userIndex = this.userData.findIndex((user) => user.id === id);
    this.userData[userIndex] = {
      ...this.userData[userIndex],
      ...data,
      id,
      addDate: this.userData[userIndex].addDate,
    };
    return this.userData[userIndex];
  }

  deleteUser(id: number): { message: string } {
    const userIndex = this.userData.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      return { message: 'User not found' };
    }

    this.userData.splice(userIndex, 1);
    return { message: 'User deleted successfully' };
  }
}
