import httpService from "./http.serviсe";

const userEndpoint = "user/";

const userService = {
  get: async () => {
    const { data } = await httpService.get(userEndpoint);
    return data;
  },
  create: async (payload) => {
    const { data } = await httpService.put(userEndpoint + payload._id, payload);
    return data;
  },
  getUserById: async (userId) => {
    const { data } = await httpService.get(userEndpoint + userId);
    return data;
  },
  update: async (payload) => {
    const { data } = await httpService.put(userEndpoint + payload._id, payload);
    return data;
  }
};

export default userService;
