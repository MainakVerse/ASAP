import { Logo} from "@/assets";
import Link from "next/link";



export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex gap-2 items-center lg:flex-1">
            <Logo className="size-6" />
            <Link href="https://mainakchaudhuri.netlify.app/" target="_blank"><span className="text-2xl">ASAP @ Supernova</span></Link>
          </div>
              
          
        </div>
      </div>
    </footer>
  );
};
