import { Controller, Get, Param } from '@nestjs/common';
import { CampaignsService } from './campaigns.service';
import { Campaign } from './dto/campaign.dto';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { logger } from 'src/logs/loki.logger';

@ApiTags('Campaigns')
@Controller('campaigns')
export class CampaignsController {
  constructor(private readonly campaignsService: CampaignsService) {}

  @ApiResponse({ status: 200, description: 'List of campaigns' })
  @Get()
  async findAll(): Promise<Campaign[]> {
    logger.info('Campaigns list requested');

    return await this.campaignsService.findAll();
  }

  @ApiResponse({ status: 200, description: 'Campaign' })
  @ApiResponse({ status: 404, description: 'Campaign not found' })
  @Get(':slug')
  @ApiParam({
    name: 'slug',
    type: String,
    required: true,
    description: 'Id of the campaign',
  })
  async findOne(@Param() params: { slug: string }): Promise<Campaign> {
    logger.info('Campaign requested', { slug: params.slug });

    return this.campaignsService.findOne(params.slug);
  }
}
