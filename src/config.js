config = {
  apiUrl : 'http://localhost:3000'
}

if (process.env.API_URL !== undefined) {
  config.apiUrl = process.env.API_URL;
}

module.exports = config;