import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import "./Auth.css"

// Mock Login component
const Login = () => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold text-center">Login</h2>
    <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
    <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
    <Button className="w-full">Sign In</Button>
  </div>
)

// Mock Signup component
const Signup = () => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold text-center">Sign Up</h2>
    <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" />
    <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
    <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
    <Button className="w-full">Sign Up</Button>
  </div>
)

const Auth = () => {
    const [active, setActive] = useState(true);
    
    return (
        <div className='loginContainer'>
            <div className='box h-[30rem] w-[25rem]'>
                <div className='minContainer login'>
                    <div className='loginBox w-full px-10 space-y-5'>
                        {active ? <Signup/> : <Login/>}
                        <div className="text-center">
                            <span className="text-sm text-gray-600">
                                {active ? "Already have an account? " : "Don't have an account? "}
                            </span>
                            <Button 
                                variant="ghost" 
                                onClick={() => setActive(!active)}
                                className="text-blue-500 hover:text-blue-700"
                            >
                                {active ? "Sign In" : "Sign Up"}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth