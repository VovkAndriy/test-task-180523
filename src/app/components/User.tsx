import React from 'react';
import { UserType } from '../types';
import Image from 'next/image';

type Props = Pick<
  UserType,
  'profile_photo' | 'display_name' | 'email' | 'phone' | 'telegram_user_link'
>;

export const User: React.FC<Props> = ({
  profile_photo,
  display_name,
  email,
  phone,
  telegram_user_link,
}) => {
  return (
    <div className="border-2 w-[600px] h-[350px] p-5">
      <div className="rounded-full overflow-hidden w-[100px] h-[100px] mb-[10px]">
        {profile_photo && (
          <Image
            src={profile_photo}
            width={100}
            height={100}
            alt="Picture of the author"
          />
        )}
      </div>
      <p className="text-[24px]">{display_name}</p>
      <div className="flex items-center">
        <p className="mr-[10px]">Email:</p>
        <p className="text-[18px] text-[#ccc] underline">{email}</p>
      </div>
      <div className="flex items-center">
        <p className="mr-[10px]">Phone:</p>
        <p className="text-[18px] text-[#ccc] underline">
          +{phone.country_code}
          {phone.number}
        </p>
      </div>
      <div className="flex items-center">
        <p className="mr-[10px]">Telegram:</p>
        <p className="text-[18px] text-[#ccc] underline">
          {telegram_user_link}
        </p>
      </div>
    </div>
  );
};
