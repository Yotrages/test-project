import { arrow_down } from '@/public/assets';
import Image from 'next/image';

export const AccountDropdown = () => {
  return (
    <div className='account-border-wrapper rounded-full'>
      <span className='flex items-center justify-center gap-[10px] rounded-full py-[10px] pl-[10px] pr-1 bg-[#111111]'>
        <p className='font-arial font-normal text-[10px] text-white whitespace-nowrap'>Main USD Account</p>
        <span className='p-1'>
          <Image src={arrow_down} alt='arrow' width={12} height={12} className='object-contain' />
        </span>
      </span>
    </div>
  );
};