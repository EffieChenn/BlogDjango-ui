// 在 netlify/functions/api.js 中

const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  const response = await fetch("http://localhost:8000/api/blog/");
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
