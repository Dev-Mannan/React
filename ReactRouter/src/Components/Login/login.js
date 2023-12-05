import {GoogleLogin} from '@react-oauth/google'

const clientId = "39101561842-u731ul4i1b57vl7d2t1l90qgaof7ugfv.apps.googleusercontent.com";

function Login(){

    const onSuccess = (res)=>{
        console.log('success',res.profileObj);

    }

    const onFailure = (res)=>{
        console.log('failed',res);
    }

    return(
        <div id='signInButton'>
            <GoogleLogin clientId={clientId} 
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}

            />

        </div>
    )
}

export default Login