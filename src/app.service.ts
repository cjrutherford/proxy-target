import { Injectable, Headers } from '@nestjs/common';
import { HttpService } from '@nestjs/common/http';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService){}
  async proxyGetRequest(headers: Headers, path: string, params?:any[]){
    return await this.httpService.get(path, {headers, params}).toPromise()
  }
  async proxyPostRequest(headers: Headers, path: string, params?:any[], body?:any){
    return await this.httpService.post(path, body, {headers, params}).toPromise()
  }
  async proxyPutRequest(headers: Headers, path: string, params?:any[], body?:any){
    return await this.httpService.put(path, body, {headers, params}).toPromise()
  }
  async proxyDeleteRequest(headers: Headers, path: string, params?:any[]){
    return await this.httpService.delete(path, {headers, params}).toPromise()
  }
}
