import React, { useRef, useState } from 'react'
import Header from './Header'
import BackgroundImage from '../images/background.jpg'
import { checkValidateData } from '../utils/validate'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {auth} from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [validateResponse,setValidateResponse] = useState({});
  const [authError,setAuthError] = useState("");

  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm);
    !isSignInForm && (fullName.current.value="");
    email.current.value="";
    password.current.value="";
    setValidateResponse({});
    setAuthError("");
  }

  const handleButtonClick = () =>{
     const errors = checkValidateData((isSignInForm?undefined:fullName.current.value),email.current.value,password.current.value);
     setValidateResponse(errors);
     console.log(errors);
     if(!(errors.emailError==="" && errors.fullNameError==="" && errors.passwordError==="")) return;
       
     if(isSignInForm){
          signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
          })
          .catch((error) => {
            const errorCode = error.code;
            setAuthError(errorCode);
          });
        }
     else{
         createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
         .then((userCredential) => {
           const user = userCredential.user;
           updateProfile(user, {
               displayName:fullName.current.value , 
               photoURL: "https://example.com/jane-q-user/profile.jpg"
             }).then(() => {
                const {uid,email, displayName, photoURL} = auth.currentUser;
                dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
             }).catch((error) => {});
         })
         .catch((error) => {
           const errorCode = error.code;
           setAuthError(errorCode);
         });
        }
  }

  return (
    <div className='h-full w-full'>
        <Header/>
        <div className='absolute h-full w-full'>
           <img src={BackgroundImage} alt="background" className='h-full w-full'/>
        </div>
        <form 
          onSubmit={(e)=> e.preventDefault()} 
          className="relative mx-auto top-36 px-8 sm:px-20 py-10 xl:py-16 w-4/5 sm:w-3/5 md:w-1/2 xl:w-2/5 flex flex-col bg-black/90 rounded-md">
            <h1 className='text-white text-3xl font-semibold mb-5'>
                {isSignInForm? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && (
              <>
                <input 
                  ref={fullName}
                  type="text" 
                  placeholder="Full Name" 
                  className="px-4 py-2 my-2 rounded-md bg-[#333333] text-white"
                />
                <p className="text-sm font-medium text-[#cf0e07]">{validateResponse.fullNameError}</p>
              </>
            )}
            <input 
              ref={email}
              type="text" 
              placeholder="Email Address" 
              className="px-4 py-2 my-2 rounded-md bg-[#333333] text-white"
            />
             <p className="text-sm font-medium text-[#cf0e07]">{validateResponse.emailError}</p>
            <input 
              ref={password}
              type="password" 
              placeholder="Password" 
              className="px-4 py-2 my-2 rounded-md bg-[#333333] text-white"
            />
             <p className="text-sm font-medium text-[#cf0e07]">{validateResponse.passwordError}</p>
             <p className="text-sm font-medium text-[#cf0e07]">{authError}</p>
            <button 
              className="p-2 mt-7 mb-5 bg-[#cf0e07] text-white px-4 py-2 rounded-md"
              onClick={handleButtonClick}
            >
                {isSignInForm? "Sign In" :"Sign Up"}
            </button>
            <h1 className='text-white hover:cursor-pointer' onClick={()=>toggleSignInForm()}>
                { isSignInForm ?
                  `New to NetflixGPT? Sign up Now`:
                  `Already a User? Sign in Now`
                }
            </h1>
        </form>
    </div>
  )
}

export default Login