import React from 'react'

// 1) LoginButtonProps adinda interface yaradiriq. 
interface LoginButtonProps{
    type?: "button" | "submit" | "reser" | undefined;       // 2) Duyme ferqli tiplerde oa biler.
    fullWidth?: boolean;                                    // 3) duyme kicikmi balacami olacaq teyin etmek ucun fullWidth xassesinden istifade edirik.
    children?: React.ReactNode;                             // 4) Duymenin ferqli adlari olacaq
    onClick?: () => void;                                   // 5) Duyme kliklendikde bir funksiya qebul edecek ve void ise hemin funksiyanin deyer return etmiyeceyini bildirir.
}

const LoginButton = ({type, fullWidth, children, onClick}: LoginButtonProps) => {
  return (
    // 6) className atributuna deyerleri, {} bezekli morterize icinde onun icin verdik ki, JS funksiyasini yaza bilek. Asagida sorgu yazmisiq. 
    <button className={`p-3 bg-cyan-800 hover:bg-cyan-950 text-white rounded-lg ${fullWidth && "w-full"}`} type="button" onClick={onClick}>{children}</button>
  )
}

export default LoginButton


// 7) Indi ise web sehifenin istenilen yerine bu button COMPONENT-ini elave ederek her defe ferqli deyerler PROPS etmek olar. 