import { Body, Controller, Get, Headers, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';
import { LoginRequestDTO } from './models/loginRequest.dro';
import RegisterRequestDTO from './models/registerRequest.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiResponse({status: 201, type: 'string', description: 'user token for login'})
  @Post('login')
  async login(@Headers() headers: Headers, @Body() {username, password}: LoginRequestDTO): Promise<string> {
    try{
      const proxyResult = await this.appService.proxyPostRequest(headers, 'http://localhost:3000/login', [], {username, password});
      console.log("🚀 ~ file: app.controller.ts ~ line 13 ~ AppController ~ getHello ~ proxyResult", proxyResult.data);
      return proxyResult.data;
    } catch(e) {
      console.error(e);
      throw e;
    }
  }
  @ApiResponse({status: 201, description: 'Success or Failure for Registration'})
  @Post('register')
  async register(@Headers() headers: Headers, @Body() {username, password, confirm}: RegisterRequestDTO): Promise<boolean> {
    try{
      const proxyResult = await this.appService.proxyPostRequest(headers, 'http://localhost:3000/register', [], {username, password, confirm});
      console.log("🚀 ~ file: app.controller.ts ~ line 13 ~ AppController ~ getHello ~ proxyResult", proxyResult.data);
      return proxyResult.data;
    } catch(e) {
      console.error(e);
      throw e;
    }
  }
  @ApiBearerAuth()
  @ApiResponse({status: 201, type: 'string', description: 'Success or Failure for Authenticated Request'})
  @Get('authed')
  async authed(@Headers() headers: Headers): Promise<string> {
    try{
      const proxyResult = await this.appService.proxyGetRequest(headers, 'http://localhost:3000/authed', []);
      console.log("🚀 ~ file: app.controller.ts ~ line 13 ~ AppController ~ getHello ~ proxyResult", proxyResult.data);
      return proxyResult.data;
    } catch(e) {
      console.error(e);
      throw e;
    }
  }
}
