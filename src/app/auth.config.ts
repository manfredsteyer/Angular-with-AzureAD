import { AuthConfig } from "angular-oauth2-oidc";

// See Overview tap in Azure AD
// I's also called Directory-Id (tenand)
// (see client.png)
const tenand = 'e402be96-34c9-477a-91ba-be69d7b3bf40';

export const authConfig: AuthConfig = {
    
    // Settings for Azure AD
    // In the case of Azure AD, we can derive all these settings from the tenand
    // Normally, these settings would be loaded from the discovery endpoint
    // However, Azure AD does not enable CORS for this endpoint. Hence, we have
    // to configure them here by hand.
    issuer: `https://login.microsoftonline.com/${tenand}/v2.0`,
    loginUrl: `https://login.microsoftonline.com/${tenand}/oauth2/v2.0/authorize`,
    tokenEndpoint: `https://login.microsoftonline.com/${tenand}/oauth2/v2.0/token`,
    logoutUrl: `https://login.microsoftonline.com/${tenand}/oauth2/v2.0/logout`,

    // This API is always the same when using Azure AD
    userinfoEndpoint: 'https://graph.microsoft.com/oidc/userinfo',

    // ClientId from the configured client in Azure AD (see api.png)
    clientId: 'c502279d-c95a-41f4-9042-f2a1b1e7dda4',

    // Your index.html
    redirectUri: 'http://localhost:4200/index.html',

    scope: 'openid profile api://myapi/read api://myapi/write',
    //                            ^                ^
    //                            +----------------+-------- Configured Scopes for the API (Optional)
    //                                                       (see api.png)
    
    // Use Code Flow according to current best practices
    responseType: 'code'

};