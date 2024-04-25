// 1) 
'use client'

import Hero from "@/components/Hero";
import LoginButton from "@/components/LoginButton";
import { usePathname, useRouter } from "next/navigation";

export default function Home() {

  // 2)
  const pathname = usePathname()
  const router = useRouter()

  return (
    <>
      <Hero image="/slider/winwall.jpeg" image2="cofe.png" title="Lorem, ipsum dolor." description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat saepe accusantium, exercitationem delectus fuga repellat omnis sint minima vel veniam tenetur architecto voluptatum non ipsum libero consequatur aliquam aspernatur voluptates."></Hero>

      <div>Home Page</div>

      {/*3) fullWidth xassesini deyer vermeden yazdiqda bu default olaraq TRUE veririk menasina gelir. Onunde sual isaresi olanlari elave edede bilerik 
      etmeyede bilerik. Sual isaresi istifadenin vacib olmadigini bildirir. */}
      <LoginButton fullWidth type="submit" onClick={() => router.push('auth/login')}>Click me here</LoginButton>

    </>
  );
}