import httpService from "./http.serviсe";

const endPoint = "comments/";

const commentsService = {
  create: async (payload) => {
    const { data } = await httpService.put(endPoint + payload._id, payload);
    return data;
  },
  getCommetns: async (pageId) => {
    const { data } = await httpService.get(endPoint, {
      params: {
        orderBy: '"pageId"',
        equalTo: `"${pageId}"`
      }
    });
    return data;
  },
  removeComments: async (pageId) => {
    const { data } = await httpService.delete(endPoint + pageId);
    return data;
  }
};

export default commentsService;
