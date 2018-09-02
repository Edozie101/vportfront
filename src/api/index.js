const STAGING_URL = '';
const PROD_URL = '';

function getBaseUrl() {
  if (process.env.NODE_ENV === 'production') {
    return PROD_URL;
  }
  return STAGING_URL;
}

export default {
  API_URL: getBaseUrl(),
};
