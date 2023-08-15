import httpService from "./http.serviсe";

const endPoint = "qualities/";

const qualityService = {
  get: async () => {
    const { data } = await httpService.get(endPoint);
    return data;
  }
};

export default qualityService;
