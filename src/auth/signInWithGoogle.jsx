import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../auth/firebase";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";

function SignInwithGoogle({ isSignin, setIsSignin }) {
  function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result);
      const user = result.user;
      if (result.user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: user.displayName,
          photo: user.photoURL,
          lastName: "",
        });
        console.log("Ini harusnya login woyy")
        toast.success("User logged in Successfully", {
          position: "top-center",
        });
        window.location.href = "/";
      }
    });
  }
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Please Signup...</h2>
      <div
        style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
        onClick={googleLogin}
      >
        <img src={require("../assets/images/google.png")} width={"60%"} />
      </div>
    </div>
  );
}
export default SignInwithGoogle;