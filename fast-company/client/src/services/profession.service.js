import httpService from "./http.serviсe";

const professionEndpoint = "professions/";

const professionService = {
  get: async () => {
    const { data } = await httpService.get(professionEndpoint);
    return data;
  }
};

export default professionService;
