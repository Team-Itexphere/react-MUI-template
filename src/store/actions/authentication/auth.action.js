import { userloginService } from 'services/authentication/auth.service';
import { AUTH } from '../actions.types';
export const loginAction = (tokenId, navigate) => {
    return (dispatch) => {
        console.log('loginAction ', tokenId);
        // dispatch({type: END_LOADING});

        userloginService(tokenId)
        .then((responce) => {
          const user = responce?.data?.user;
          const token = responce?.data?.token;

          console.log('res auth', responce)

          if(responce.status === 200 ) {
            dispatch({
              type: AUTH,
              data: { user, token },
            });
            navigate('/');
          }

        })
        .catch((error) => {
          console.log('error', error)
      });
    }
}