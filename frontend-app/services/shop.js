import axios from "axios";
import config from "@/config/index";

class ShopService {
  instance = null;;
  axiosClient = null;

  constructor(c, baseURL = config.apiBaseUrl) {
    if (c) {
      this.axiosClient = c;
      return;
    }
    this.axiosClient = axios.create({
      baseURL,
    });
  }

  static Instance() {
    if (!this.instance) {
      this.instance = new ShopService();
    }
    return this.instance;
  }

  async GetByID(id) {
    const url = `/api/Shops/${id}?populate=*`;
    const resp = await this.axiosClient.get(url);
    return resp.data?.data;
  }

  async GetReviewsByShopID(id) {
    const url = `/api/reviews?filters[shopId]=${id}`;
    const resp = await this.axiosClient.get(url);
    return resp.data?.data;
  }
}

const ShopServiceInstance = ShopService.Instance();

export default ShopServiceInstance;
export {
  ShopServiceInstance,
  ShopService,
}