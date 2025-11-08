import { squares, plus, swap, chatbar } from '@/public/assets';
import Image from 'next/image';

export const NavItems = () => {
  return (
    <span className="flex flex-col gap-[6px]">
      <span className="flex items-center gap-[6px]">
        <div className="w-[3px] h-[30px] bg-[#E85102] rounded-tr-[4px] rounded-br-[4px] border-shadow" />
        <button className="w-9 h-9 rounded-[27px] p-[5px] flex items-center justify-center square-gradient">
          <Image src={squares} alt="squares" width={20} height={20} />
        </button>
      </span>
      <span className="w-9 h-9 flex items-center justify-center rounded-sm p-[5px] ml-[9px]">
        <Image src={plus} alt="plus" width={20} height={20} />
      </span>
      <span className="w-9 h-9 flex items-center justify-center rounded-sm p-[5px] ml-[9px]">
        <Image src={swap} alt="swap" width={20} height={20} />
      </span>
      <span className="w-9 h-9 flex items-center justify-center rounded-sm p-[5px] ml-[9px]">
        <Image src={chatbar} alt="chatbar" width={20} height={20} />
      </span>
    </span>
  );
};