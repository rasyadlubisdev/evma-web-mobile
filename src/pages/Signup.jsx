import React from "react";
import SignInwithGoogle from "../auth/signInWithGoogle";

const Signup = () => {

    return (
        <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <SignInwithGoogle />
        </div>
    )
}

export default Signup;