import { AuthConfig } from "angular-oauth2-oidc";

// See Overview tap in Azure AD
// I's also called Directory-Id (tenand)
// (see client.png)
const tenand = 'e402be96-34c9-477a-91ba-be69d7b3bf40';

export const authConfig: AuthConfig = {
    
    // Derive issuer from tenand
    issuer: `https://login.microsoftonline.com/${tenand}/v2.0`,
    
    // Optional security checks that don't work with Azure AD
    strictDiscoveryDocumentValidation: false,

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