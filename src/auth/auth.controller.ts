import { Body, Controller, HttpCode, HttpStatus, ParseIntPipe, Post, Req, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { log } from "console";
import { AuthDto } from "./dto";
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    // @HttpCode(HttpStatus.OK)
    @Post('signup')
    signup(@Body() dto: AuthDto) {
        // signup(
        //     @Body('email') email: string,
        //     @Body('password', ParseIntPipe) pass: string
        // ) 


        //  pipe help us to convert
        // log({
        //     email,
        //     typeOfEmail: typeof email,
        //     pass,
        //     typeOfPassword: typeof pass
        // }, "in the controller signup")





        return this.authService.signup(dto)
    }

    @HttpCode(HttpStatus.OK)
    @Post('signin')
    signin(@Body() dto: AuthDto) {
        // req.user
        return this.authService.signin(dto)
    }
}