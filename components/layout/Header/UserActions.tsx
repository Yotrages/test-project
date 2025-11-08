import { notification, user, moreIcon } from '@/public/assets';
import Image from 'next/image';

export const UserActions = () => {
  return (
    <div className='flex items-center justify-center gap-[10px]'>
      <span className='account-border-wrapper rounded-full'>
        <span className='flex items-center w-8 h-8 justify-center rounded-full bg-[#111111]'>
          <Image 
            src={notification}
            alt='notification'
            width={16}
            height={16}
            className='object-contain'
          />
        </span>
      </span>
      <span className='account-border-wrapper rounded-[30px]'>
        <span className='flex items-center justify-center gap-1 rounded-[30px] pl-[2px] pr-1 bg-[#111111]'>
          <Image 
            src={user}
            alt='user'
            width={30}
            height={30}
            priority
            className='object-contain'
          />
          <span className='flex flex-col gap-[2px]'>
            <p className='font-arial font-normal text-[10px] text-[#EAEAEA]'>Alex Rode</p>
            <p className='font-arial font-normal text-[8px] text-[#767676]'>ID: 944 869 XD </p>
          </span>
          <Image 
            src={moreIcon}
            alt='more'
            width={20}
            height={20}
            className='object-contain'
          />
        </span>
      </span>
    </div>
  );
};
