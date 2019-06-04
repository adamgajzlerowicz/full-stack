import { Get, Controller, UseGuards} from '@nestjs/common';
import {UsersService} from './users.service';
import {User} from './interfaces/user.interface';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}
    @Get()
    async findAll(): Promise<User[]> {
        return this.userService.findAll();
    }
}
