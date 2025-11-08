'use client';
import React from 'react';
import { StatsBar } from './StatsBar';
import { UserActions } from './UserActions';
import { SearchBar } from '@/components/ui/SearchBar';
import { AccountDropdown } from '@/components/ui/AccountDropdown';
import { Menu } from 'lucide-react';

interface HeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
}

const Header = ({ isMobileMenuOpen, setIsMobileMenuOpen }: HeaderProps) => {
  return (
    <header className='w-full border-b border-b-[#202020] bg-black' role="banner">
      <nav className='px-[10px] py-2 flex items-center justify-between w-full min-h-[60px]' aria-label="Main navigation">
        
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className='lg:hidden flex flex-col gap-1 p-2'
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-sidebar"
        >
          <Menu className='w-5 h-5 text-white'/>
        </button>

        <div className='hidden xl:flex items-center gap-2 flex-1'>
          <StatsBar />
          <SearchBar />
        </div>

        <div className='hidden sm:flex xl:hidden flex-1 justify-center'>
          <SearchBar />
        </div>

        <div className='flex items-center gap-[10px] ml-auto'>
          <div className='hidden lg:block'>
            <AccountDropdown />
          </div>
          
          <UserActions />
        </div>
      </nav>
    </header>
  );
};

export default Header;
