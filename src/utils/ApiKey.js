require('dotenv').config();

module.exports = {
        APIKey: process.env.REACT_APP_APIKey,
        LANGUAGE: process.env.REACT_APP_LANGUAGE,
        URL: process.env.REACT_APP_URL,
        URL_IMAGE: process.env.REACT_APP_URL_IMAGE
}