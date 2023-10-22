import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { ApiOAuth2, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/google.strategy';
import { logger } from 'src/logs/loki.logger';

@ApiOAuth2(['email', 'profile'], 'oauth2')
@ApiTags('Users')
@Controller('users')
export class UserController {
  @ApiResponse({ status: 200, description: 'User profile' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @UseGuards(AuthGuard)
  @Get('profile')
  async login(@Req() request): Promise<any> {
    logger.info('User profile requested', { userId: request.userId });

    return {
      id: request.userId,
      firstName: request.user.given_name,
      lastName: request.user.family_name,
      email: request.user.email,
      picture: request.user.picture,
      name: request.user.name,
    };
  }
}
