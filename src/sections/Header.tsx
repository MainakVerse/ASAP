"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/assets";
import { Button } from "@/components/Button";


export const Header = () => {
  // eslint-disable-next-line no-empty-pattern
  const [] = useState(false);


  return (
    <header className="sticky top-0 py-4  border-b border-white/15 md:border-none z-10">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container">
        <div className="relative flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto">
          <div className="absolute inset-0  backdrop-blur -z-10 hidden md:block"></div>
          <div>
            <div className="inline-flex items-center justify-center size-10 border border-white/15 rounded-lg">
              <Link href="/">
                <Logo className="size-8" />
              </Link>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <h1 className="text-4xl ">ASAP</h1>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <Link href="https://www.linkedin.com/in/mainak-chaudhuri-127898176/" target="_blank">
              <Button>Reach Out</Button>
            </Link>
            
          </div>
        </div>

        {/* Mobile Navigation */}
        
      </div>
    </header>
  );
};
