import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>Home Page</div>

      <div className="flex gap-8">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/product">Product</Link>
      </div>
    </>
  );
}


// 1) Esas sehife, dashboard, ve product sehifelerinde nav sistemi yaratdiq.