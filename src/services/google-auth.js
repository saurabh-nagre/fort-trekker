import apiCall from "./api";
import { GOOGLE_SIGNIN } from "../constants/apiRoutes";
const useGoogleAuthService = (credential) => {

  const response = apiCall({
    method: "POST",
    data: {
      credential: credential,
    },
    url: GOOGLE_SIGNIN,
  });

  response.then((value)=>{
    const profile = value.data
    console.log(profile);
  }).catch((reason)=>{
    console.log(reason);
  });
};

export default useGoogleAuthService;
