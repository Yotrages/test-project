import { search } from '@/public/assets';
import Image from 'next/image';

export const SearchBar = () => {
  return (
    <div className='relative rounded-[30px] flex'>
      <div className='input-border-wrapper rounded-full'>
        <input 
          type="text"
          className='pl-[10px] pr-7 text-white placeholder:text-[#A2A2A2] placeholder:text-[10px] w-[171px] h-[32px] flex items-center justify-center bg-[#111111] outline-none focus:outline-none rounded-full'
          placeholder='Search Instruments' 
        />
      </div>
      <button className='w-6 h-6 absolute top-1 right-1 p-[5px] rounded-full flex items-center justify-center button-gradient'>
        <Image src={search} alt='search' width={8} height={8} />
      </button>
    </div>
  );
};