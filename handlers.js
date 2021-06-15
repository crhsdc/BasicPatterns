module.exports = resource => ({ consumerAPI }) => ({
    get: async (request, response) => {
        const { data } = await consumerAPI.get(`/${resource}`);
        return response.send(data);
    },
    post: async (request, response) => {
        const { data } = await consumerAPI.post(`/${resource}`, request.body);
        return response.send(data);
    },
    put: async (request, response) => {
        const { data } = await consumerAPI.put(`/${resource}/${request.params.id}`, request.body);
        return response.send(data);
    },
    delete: async (request, response) => {
        await consumerAPI.delete(`/${resource}/${request.params.id}`);
        return response.sendStatus(204);
    }
})