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
      
      {/* 
      
          1) https://ui.shadcn.com/docs/installation/next
          2) npx shadcn-ui@latest init                             - yuklemek ucun saytda installation bolmesine kecid ederek gosterilen kamandani terminalda yaziriq.
          3) npx shadcn-ui@latest add button                       - hansi componenti isteyirikse onun ustune klikleyerek lazimli kodu terminalda yaziriq.
          4) Bu kamandani yazdiqda zonra COMPONENTS qovlugunda UI adinda bir qovluq ve icinde hemin BUTTON compoment-ini yerlesdirecek
          5) Sonra asagida oldugu kimi component-in adini yazaraq duymeni elde edirik.
          6) components/ui/button.tsx    bu fayla daxil olduqda goreceyik ki hemin button ucun ettbiq ede bileceyimiz ferqli stiller movcuddur. Eger lazim olarsa oz stilimizde elave ede bilerik.
      */}

      <Button variant={'myButton'}>Button</Button>

    </>
  );
}