import React from "react";
import SignInwithGoogle from "../auth/signInWithGoogle";
import illustrationSignup from "../assets/illustrations/illustration_mobile_login.svg"

const Signup = () => {

    return (
        <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <img src={illustrationSignup} alt="" style={{ maxWidth: "330px", marginBottom: "36px" }} />
            <SignInwithGoogle />
        </div>
    )
}

export default Signup;