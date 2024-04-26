'use client'

import Hero from "@/components/Hero";
import LoginButton from "@/components/LoginButton";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";

export default function Home() {

  const pathname = usePathname()
  const router = useRouter()

  return (
    <>
      <Hero image="/slider/winwall.jpeg" image2="cofe.png" title="Lorem, ipsum dolor." description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat saepe accusantium, exercitationem delectus fuga repellat omnis sint minima vel veniam tenetur architecto voluptatum non ipsum libero consequatur aliquam aspernatur voluptates."></Hero>

      <div>Home Page</div>

      <LoginButton fullWidth type="submit" onClick={() => router.push('auth/login')}>Click me here</LoginButton>
      
      <Button variant={'myButton'}>Button</Button>

    </>
  );
}