// // 在 netlify/functions/api.js 中

// const fetch = require("node-fetch");

// exports.handler = async (event, context) => {
//   const response = await fetch("http://localhost:8000/api/blog/");
//   const data = await response.json();

//   return {
//     statusCode: 200,
//     body: JSON.stringify(data),
//   };
// };

// netlify/functions/api.js
const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  try {
    const response = await fetch("http://localhost:8000/api/blog/"); // 更改為您的 API 地址
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch data" }),
    };
  }
};
