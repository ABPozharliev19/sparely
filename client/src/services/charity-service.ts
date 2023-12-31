import { CampaignsApi } from "../api";
import { AxiosResponse } from "axios";
import { WebApiService } from "./web-api-service";


export class CampaignsService extends WebApiService {

  campaignsApi: CampaignsApi;

  constructor() {
    super();
    this.campaignsApi = new CampaignsApi();
  }

  public async getAllCampaigns(): Promise<AxiosResponse<void, any>> {
    return await this.campaignsApi.campaignsControllerFindAll(this.generateHeader());
  }

//   public async getAllCampaigns(): Promise<Campaign[]> {
//     const campaigns: Campaign[] = [];

//     const campaignsSnapshot: any = (await this.campaignsApi.campaignsControllerFindAll(this.generateHeader())).data;

//     campaignsSnapshot.forEach(campaign => {
//        campaigns.push(CampaignScheme.parse(campaign.data())) 
//     });

//     return campaigns;
//   }

  public async getCampaignById(campaignId: string): Promise<AxiosResponse<void, any>> {
    return await this.campaignsApi.campaignsControllerFindOne(campaignId, this.generateHeader());
  }

}

const campaignService = new CampaignsService();
export default campaignService;
