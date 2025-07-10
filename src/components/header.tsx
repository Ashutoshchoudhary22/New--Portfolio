"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, Gamepad2 } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

// Debounce utility function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Debounced scroll handler with state check
  const handleScroll = useCallback(
    debounce(() => {
      const scrolled = window.scrollY > 0;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }
    }, 100),
    [isScrolled]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Quests" },
    { href: "#contact", label: "Contact" },
  ];

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-transparent transition-colors duration-300 ${
        isScrolled ? "bg-transparent" : "bg-transparent"
      }`}
    >
      {/* Background Video for Header */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/feature-4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="container flex h-14 items-center relative z-10">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            {/* Logo */}
            <Image
              src="/logo.png"
              alt="Ashutosh Choudhary Logo"
              width={40}
              height={40}
              className="drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
              priority
            />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-6">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-pulse drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] transition-colors hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-600 hover:to-pink-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden bg-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-600 hover:to-pink-600"
              >
                <Menu className="h-5 w-5 text-white" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-transparent">
              {/* Background Video for Sheet */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
              >
                <source src="/feature-4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
              </VisuallyHidden>
              <nav className="grid gap-6 text-lg font-medium mt-8 relative z-10">
                <Link
                  href="/"
                  className="flex items-center space-x-2"
                  onClick={handleLinkClick}
                >
                  <Gamepad2 className="h-6 w-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-pulse drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]" />
                  <span className="font-bold font-headline text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-pulse drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
                    Portfolio
                  </span>
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-pulse drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] transition-colors hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-600 hover:to-pink-600"
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}