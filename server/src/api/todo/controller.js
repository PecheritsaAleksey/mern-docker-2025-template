const todoService = require("../../services/todoService");

module.exports = {
  getAll: async (req, res) => {
    const result = await todoService.getAll();
    return res.json(result);
  },

  create: async (req, res) => {
    const result = await todoService.create(req.body);
    return res.json(result);
  },

  update: async (req, res) => {
    const result = await todoService.update(req.params.id, req.body);
    return res.json(result);
  },

  delete: async (req, res) => {
    const result = await todoService.delete(req.params.id);
    return res.json(result);
  },
};
