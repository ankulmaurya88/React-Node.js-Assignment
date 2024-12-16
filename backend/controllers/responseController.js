const Response = require("../models/Response");

// Save a response
const saveResponse = async (req, res) => {
  try {
    const response = await Response.create(req.body);
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { saveResponse };
