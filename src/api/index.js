const API_ROOT = "http://localhost:3000/api/v1";

const API_URLS = (extraData) => ({
  // the extraData can be used to send url params and request query data if needed to api.
  ROOT: API_ROOT,
  AUTH: {
    SIGNIN: API_ROOT + "/admins/signin/",
    LOGOUT: API_ROOT + "/users/logout/",
    TOGGLE_ACTIVITY: API_ROOT + "/admins/activity/"+extraData,
    GET_USERS: API_ROOT + "/admins/users/",
    GET_USER: API_ROOT + "/admins/users/"+extraData,
    DELETE_USER: API_ROOT + "/admins/users/"+extraData,
    DELETE_LINK: API_ROOT + "/admins/links/"+extraData,
    GET_LINKTYPES: API_ROOT + "/admins/linktypes/",
    ADD_LINKTYPE: API_ROOT + "/admins/linkstype/",
    EDIT_LINKTYPE: API_ROOT + "/admins/linkstype/"+extraData,
    EDIT_LINKICON: API_ROOT + "/admins/linkicon/"+extraData,
    GET_ADMINS: API_ROOT + "/admins/",
    CREATE_ADMIN: API_ROOT + "/superadmins/createadmin",
    DELETE_ADMIN: API_ROOT + "/superadmins/delete/"+extraData,
    CHANGE_ROLE: API_ROOT + "/superadmins/users/"+extraData,
  },
});

export default API_URLS;
