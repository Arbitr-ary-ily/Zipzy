import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger
} from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle";
import { LuMenu } from "react-icons/lu";
import { FolderDown, CircleUserRound, House } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

export default function Navbar() {
  return (
    <nav className="fixed z-50 flex items-center justify-between w-full h-16 px-4 py-2 backdrop-blur-md bg-background bg-opacity-30 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <Link href="/" className="flex items-center space-x-2 text-xl">
        <FolderDown className="text-2xl text-red-500 stroke-[2px]" size={40} />
        <h2 className="text-2xl text-red-500 font-bold">ZIPZY</h2>
      </Link>
      <div className="flex items-center gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/">
                <Button variant="ghost" className="flex items-center p-2">
                  <House size={24} />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Home</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/about">
                <Button variant="ghost" className="flex items-center p-2">
                  <CircleUserRound size={24} />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>About</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <ModeToggle />
      </div>
      {/* MOBILE NAV */}
    </nav>
  );
}
