import { ForbiddenException, Injectable } from "@nestjs/common";
import { AuthDto } from "./dto";
import * as argon from "argon2";
import { PrismaService } from "src/prisma/prisma.service";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwt: JwtService,
        private config: ConfigService
    ) { }

    // Sign-in method
    async signin(dto: AuthDto) {
        // Find the user by email
        const user = await this.prisma.user.findMany({
            where: {
                email: dto.email,
            },
        });

        // Check if user exists
        if (!user) {
            throw new ForbiddenException('Credentials incorrect');
        }

        // // Verify password
        // const passMatch = await argon.verify(user.hash, dto.password);
        // if (!passMatch) {
        //     throw new ForbiddenException('Credentials incorrect');
        // }

        // Return the signed token
        // return this.signToken(user.id, user.email);
        return user
    }

    // Sign-up method
    async signup(dto: AuthDto) {
        try {
            // Generate the hash using argon
            const hash = await argon.hash(dto.password);
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    hash,
                },
            });

            // Return the signed token
            return this.signToken(user.id, user.email);
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ForbiddenException('Credentials taken');
                }
            }
            throw error;
        }
    }

    // Method to sign the token
    async signToken(userId: number, email: string): Promise<{ access_token: string }> {
        const payload = {
            sub: userId,
            email: email,
        };

        const secret = this.config.get<string>('SECRET');
        const token = await this.jwt.signAsync(payload, {
            expiresIn: '15m',
            secret: secret,
        });

        return {
            access_token: token,
        };
    }
}
