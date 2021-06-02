import { ApiProperty } from "@nestjs/swagger";

export class LoginRequestDTO{
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string;
}