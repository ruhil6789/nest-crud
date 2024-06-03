import { Controller, Get, UseGuards, Req, Patch } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { User } from "@prisma/client";
import { GetUser } from "src/auth/decorator";
import { JwtGuard } from "src/auth/guard";

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {

    // @UseGuards(AuthGuard('jwt'))
    // @UseGuards(JwtGuard)
    @Get('me')
    // getMe(@Req() req: Request) {
    getMe(@GetUser() user: User) {
        // return req.user;
        return user

    }


    @Patch()
    async editUser() {

    }
}