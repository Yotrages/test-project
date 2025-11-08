import { settings, help } from '@/public/assets';
import Image from 'next/image';

export const BottomActions = () => {
  return (
    <div className="w-9 rounded-[30px] settings-border-wrapper">
      <div className="settings-border">
        <span className="w-9 h-9 flex items-center justify-center rounded-sm p-[5px]">
          <Image src={settings} alt="settings" width={20} height={20} />
        </span>
        <span className="w-9 h-9 flex justify-center items-center rounded-sm p-[5px]">
          <Image src={help} alt="help" width={20} height={20} />
        </span>
      </div>
    </div>
  );
};