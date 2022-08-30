import { client, METHODS } from "services/api/restClient";
import { USER_LOGIN } from "services/url";


export const userloginService = async (tokenId) => {
    console.log('tokenId', tokenId)
    let headerConfig = {
        'content-Type': 'application/x-www-form-urlencoded',
    };
    let body = {
        tokenId: tokenId,
       
      };

    return await client.API(
        METHODS.POST,
        USER_LOGIN,
        body,
        headerConfig,
    )
}