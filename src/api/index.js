const API_ROOT = "http://localhost:3000/api/v1";

const API_URLS = (extraData) => ({
  // the extraData can be used to send url params and request query data if needed to api.
  ROOT: API_ROOT,
  AUTH: {
    SIGNIN: API_ROOT + "/admins/signin/",
    LOGOUT: API_ROOT + "/users/logout/",
    PROFILE: API_ROOT + "/users/profile/",
  },
});

export default API_URLS;
