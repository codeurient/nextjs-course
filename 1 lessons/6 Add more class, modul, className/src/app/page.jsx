import { Inter, Roboto } from "next/font/google";
import styles from "./page.module.css";

// 2) Google fontlarini istifade etmek istedikde ise NEXT js-e mexsus INTER yaxud ROBOTO modullarini IMPORT ede bilerik. Eger birden cox CLASS adı vermek lazim olarsa onda asagidaki kimi 
// `` apastrof ve ${} simvollari icinde hemin class adlarini sadalamaq olar. 
const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ weight: '400', subsets: ['latin'], })


export default function Home() {
  return (
    // 1) Yuxarida 'page.module.css' faylini, STYLES adı ile IMPORT etdikden sonra ve MAIN class adıni yazaraq hemin class adina verilen stilleri <main> elementine tetbiq etmisik..
    <main className={`${styles.main} ${roboto.className}`}>
      {/* 3) className yazaraq roboto deyiskeninin icinden avtomatik tetbiq edilecek class adni elde edirik.  */}
      Hello World!
    </main>
  );
}
