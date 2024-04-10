import { Controller, Get } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly httpService: HttpService,
  ) {}

  @Get()
  async getAuth() {
    const user = await this.authService.getUser().toPromise();
    return { user: user.data, token: 'abc123' };
  }
}