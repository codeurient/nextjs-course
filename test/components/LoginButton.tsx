import React from 'react'

interface LoginButtonProps{
    type?: "button" | "submit" | "reser" | undefined;       
    fullWidth?: boolean;                                    
    children?: React.ReactNode;                             
    onClick?: () => void;                                  
}

const LoginButton = ({type, fullWidth, children, onClick}: LoginButtonProps) => {
  return (
    <button className={`p-3 bg-cyan-800 hover:bg-cyan-950 text-white rounded-lg ${fullWidth && "w-full"}`} type="button" onClick={onClick}>{children}</button>
  )
}

export default LoginButton



