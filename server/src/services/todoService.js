const { ToDo } = require("../database/models");

module.exports = {
  getAll: async () => {
    const result = await ToDo.find();
    return result;
  },

  create: async (data) => {
    const result = await ToDo.create(data);
    return result;
  },

  update: async (id, data) => {
    const result = await ToDo.findByIdAndUpdate(id, data);
    return result;
  },

  delete: async (id) => {
    const result = await ToDo.findByIdAndDelete(id);
    return result;
  },
};
