import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import Card from "../UI/Card";
import notesstyle from './NotesLogin.module.css'
import { jwtDecode } from "jwt-decode";
const NotesLogin = () => {
  var decoded;
  return (
    <div className={notesstyle.googleloginnotes}>
      <Card>
        <GoogleOAuthProvider clientId="312261795814-03mepd8g20g51t76565ro20m95qdhtvs.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              var decoded = jwtDecode(credentialResponse.credential);
              var token= decoded.tokenId
              console.log(decoded, token);

            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </GoogleOAuthProvider>
      </Card>
    </div>
  );
};
export default NotesLogin;
