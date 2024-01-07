import React, { useRef, useState } from 'react'
import Header from './Header'
import BackgroundImage from '../images/background.jpg'
import { checkValidateData } from '../utils/validate'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [validateResponse,setValidateResponse] = useState({});

  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm);
    !isSignInForm && (fullName.current.value="");
    email.current.value="";
    password.current.value="";
    setValidateResponse({});
  }

  const handleButtonClick = () =>{
     if(isSignInForm){
        setValidateResponse(checkValidateData(undefined,email.current.value,password.current.value));
     }
     else{
        setValidateResponse(checkValidateData(fullName.current.value,email.current.value,password.current.value));
     }
     console.log(validateResponse);
  }

  return (
    <div>
        <Header/>
        <div className='absolute'>
           <img src={BackgroundImage} alt="background"/>
        </div>
        <form onSubmit={(e)=> e.preventDefault()} className="relative mx-auto top-36 px-20 py-16 w-2/5 flex flex-col bg-black/90 rounded-md">
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