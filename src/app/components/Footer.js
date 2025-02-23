'use client'

import Image from "next/image";
import Link from 'next/link'



export default function Footer() {
    return(

        <footer className="flex gap-6 flex-wrap items-center justify-evenly absolute inset-x-0 bottom-0 h-20 ">
        

        <Link href="." className="flex items-center gap-2 hover:text-emerald-600 hover:underline hover:underline-offset-4"> 
        <Image
          src="/home-grey-outline.svg"
          alt="Home icon"
          width={16}
          height={16}
        />
        Home 
        </Link>

        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4  hover:text-emerald-500"
          href="https://www.cisa.gov/secure-our-world/require-strong-passwords"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/link-outline.svg"
            alt="Link icon"
            width={16}
            height={16}
            
          />
          Password Resources
        </Link>

        <Link 
          href="./about"

          className="flex item-center gap-2  hover:text-emerald-600 hover:underline hover:underline-offset-4">
        
          <Image 
          src="/info-outline.svg"
          alt="Information outline"
          width="16"
          height="16"
        
          />
          About
        </Link>

       


      </footer>

    )
}




