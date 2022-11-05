import axios from "axios";
import config from "@/config/index";

class ReviewTagService {
  instance = null;
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
      this.instance = new ReviewTagService();
    }
    return this.instance;
  }

  async GetAll() {
    const url = `/api/review-tags`;
    const resp = await this.axiosClient.get(url);
    return resp.data?.data;
  }
}

const ReviewTagServiceInstance = ReviewTagService.Instance();

export default ReviewTagServiceInstance;
export { ReviewTagServiceInstance, ReviewTagService };
