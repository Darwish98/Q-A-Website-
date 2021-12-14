export const server = 'http://localhost:17525';

export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: 'dev-483-27pi.us.auth0.com',
  client_id: 'QlMBhyGSwwyxKboBi1H696dr4rvts5ez',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  audience: 'https://qanda',
};
