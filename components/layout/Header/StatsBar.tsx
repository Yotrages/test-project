import { margin_Used } from '@/public/assets';
import Image from 'next/image';

interface Stat {
  image: any;
  text: string;
  subText: string;
  isProfit?: boolean;
}

export const StatsBar = () => {
  const navLinks: Stat[] = [
    { image: null, text: 'Balance', subText: '$10,500.00' },
    { image: null, text: 'Equity', subText: '$10,660.00' },
    { image: margin_Used, text: 'Margin Used/Free', subText: '$560.00 / 660.00 ' },
    { image: null, text: 'Margin Level', subText: '205.30%' },
    { image: null, text: 'Total Unrealized P/L', subText: '$2,304.02', isProfit: true },
    { image: null, text: 'Time Zone', subText: '13:31:08 (6+)' },
  ];

  return (
    <div className='flex items-center gap-3 xl:gap-2'>
      {navLinks.map(({image, text, subText, isProfit}, index) => (
        <div key={index} className='flex items-center justify-center'>
          {image && (
            <Image 
              src={image}
              alt='margin icon'
              width={29}
              height={29}
            />
          )}
          <span className='flex flex-col items-start gap-[2px]'>
            <p className='font-arial font-normal text-xs text-gradient whitespace-nowrap'>{text}</p>
            <p className={`font-arial font-bold text-xs whitespace-nowrap ${isProfit ? 'text-[#2FD77B]' : 'text-white'}`}>
              {subText}
            </p>
          </span>
        </div>
      ))}
    </div>
  );
};
