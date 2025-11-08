"use client";
import { logo, wallet } from "@/public/assets";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { NavItems } from "./NavItems";
import { BottomActions } from "./BottomActions";

interface SideBarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
}

const SideBar = ({ isMobileMenuOpen, setIsMobileMenuOpen }: SideBarProps) => {
  const sidebarRef = useRef<HTMLElement>(null);

  // Handle focus trap when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen && sidebarRef.current) {
      const focusableElements = sidebarRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement;

      const handleTab = (e: KeyboardEvent) => {
        if (e.key === "Tab") {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement?.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement?.focus();
              e.preventDefault();
            }
          }
        }
      };

      document.addEventListener("keydown", handleTab);
      firstElement?.focus();

      return () => document.removeEventListener("keydown", handleTab);
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <aside
        className="hidden lg:flex w-[54px] py-[10px] h-screen min-h-screen border-r border-r-[#1C1B20] bg-[#0B0B0B] fixed left-0 top-0 z-50"
        role="navigation"
        aria-label="Main sidebar navigation"
      >
        <div className="flex flex-col items-center justify-between h-full w-full">
          <div className="flex flex-col gap-5">
            <Image
              src={logo}
              width={36}
              height={36}
              alt="FX Trading Platform Logo"
              className="ml-2"
              style={{ width: "auto", height: "auto" }}
              priority
            />
            <NavItems />
            <span className="wallet-wrapper ml-[9px]">
              <span className="wallet w-9 h-9 flex items-center justify-center p-[5px]">
                <Image src={wallet} alt="Wallet" width={20} height={20} />
              </span>
            </span>
          </div>
          <BottomActions />
        </div>
      </aside>

      <aside
        ref={sidebarRef}
        id="mobile-sidebar"
        className={`lg:hidden fixed top-0 left-0 w-[54px] py-[10px] h-[100dvh] max-h-screen border-r border-r-[#1C1B20] bg-[#0B0B0B] z-50 transition-transform duration-300 ease-in-out overflow-y-auto ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="navigation"
        aria-label="Mobile sidebar navigation"
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex flex-col items-center justify-between h-full min-h-[500px] w-full">
          <div className="flex flex-col gap-5 flex-shrink-0">
            <Image
              src={logo}
              width={36}
              height={36}
              alt="FX Trading Platform Logo"
              className="ml-2"
              style={{ width: "auto", height: "auto" }}
              priority
            />
            <NavItems />
            <span className="wallet-wrapper ml-[9px]">
              <span className="wallet w-9 h-9 flex items-center justify-center p-[5px]">
                <Image src={wallet} alt="Wallet" width={20} height={20} />
              </span>
            </span>
          </div>
          <div className="mt-auto flex-shrink-0">
            <BottomActions />
          </div>
        </div>
      </aside>

      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default SideBar;
