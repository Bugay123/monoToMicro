import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private readonly httpService: HttpService) {}

  getUser(): Observable<AxiosResponse<any>> {
    return this.httpService.get('http://localhost:3000/user');
  }
}