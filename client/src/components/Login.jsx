// import {GoogleLogin} from 'react-google-login';
import { useState, useEffect } from 'react';

const clientId = '935692908995-9rljb05alk8n28ppgg2jg3dvb03eh2v0.apps.googleusercontent.com';

export default function Login() {

    /*
    const onSuccess = (res) => {
        console.log('Login success, current user: ', res.profileObj);
        console.log('credentials: ', res.credential);
    }

    const onFailure = (res) => {
        console.log('Login failed, result: ', res);
    }
    */

    useEffect(() => {
        /* global google */
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {theme:"outline", size:"large"}
          )
    }, [])

    return (
        <div id="signInDiv">
            {/* <GoogleLogin
                clientId={clientId}
                buttonText = {"Login"}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy ={'single_host_origin'}
                isSignedIn = {true}
            /> */}
        </div>
    );
}