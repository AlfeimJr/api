import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { error } from 'console';
import { LoginService } from 'src/login/login.service';

@Injectable()
export class AuthService {
  constructor(
    private loginService: LoginService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.loginService.findOne(email);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return error('Usuário ou senha inválidos');
  }

  async login(user: any) {
    const payload = { username: user.email, sub: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
