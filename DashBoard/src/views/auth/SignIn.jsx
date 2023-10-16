import InputField from "components/fields/InputField";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { firbaseauth } from "utils/firebase";

export default function SignIn() {
  const [email, setEmail] = useState();
  const [passWord, setpassWord] = useState();
  const navigate = useNavigate();
  const handleLogin = async (event) => {
    event.preventDefault(); 
    try {
      const mail = email;
      const password = passWord;
      await signInWithEmailAndPassword(firbaseauth, mail, password);
      navigate("/admin/");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Sign In
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Enter your email and password to sign in!
        </p>
        <InputField
          variant="auth"
          placeholder="mail@simmmple.com"
          extra="mb-3"
          onChange={(e) => setEmail(e.target.value)}
          label="Email*"
          value={email}
          id="email"
          type="text"
        />

        {/* Password */}
        <InputField
          variant="auth"
          onChange={(e) => {
            setpassWord(e.target.value);
          }}
          extra="mb-3"
          label="Password*"
          value={passWord}
          placeholder="Min. 8 characters"
          id="password"
          type="password"
        />

        <button
          onClick={handleLogin}
          className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
