"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Clock } from "lucide-react";
import Link from "next/link";
import { ChaturbateModel } from '@/types/api';

type ModelCardProps = ChaturbateModel;

const genderIcons = {
  'f': '♀',
  'm': '♂',
  't': '⚧',
  'c': '⚤'
};

const ModelCard = ({ 
  username, 
  room_subject, 
  image_url_360x270, 
  num_users, 
  current_show,
  is_hd,
  is_new,
  age,
  seconds_online,
  gender,
  country
}: ModelCardProps) => {
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  return (
    <Link href={`/${username}`} className="block h-full">
      <Card className="overflow-hidden group cursor-pointer w-full h-full bg-[#F0F1F1]">
        <CardContent className="p-0 h-full flex flex-col">
          {/* Contenedor de imagen con proporción fija y overflow hidden */}
          <div className="relative w-full pt-[75%] overflow-hidden">
            <Image
              src={image_url_360x270}
              alt={username}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-300 absolute top-0 left-0"
            />
            {/* Badge HD */}
            {is_hd && (
              <div className="absolute top-2 left-2">
                <span className="bg-pink-500 text-white text-[10px] px-1.5 py-0.5 rounded-sm font-medium">
                  HD
                </span>
              </div>
            )}
          </div>

          {/* Información debajo de la imagen */}
          <div className="px-1.5 pt-1.2 pb-1 flex-1 flex flex-col">
            {/* Primera línea: username y metadatos */}
            <div className="flex items-center justify-between pb-.7 border-b border-gray-400">
              <span className="text-sm text-[#0A5A83] hover:text-[#0A5A7D] font-medium truncate max-w-[60%]">
                {username}
              </span>
              <div className="flex items-center gap-1">
                <span className="font-bold text-xs text-gray-600">{age}</span>
                <span className="text-sm mx-0.5">{genderIcons[gender]}</span>
                <Image 
                  src={`https://flagcdn.com/w20/${country.toLowerCase()}.png`}
                  alt={country}
                  width={14}
                  height={10}
                  className="inline-block"
                />
              </div>
            </div>
            
            {/* Segunda línea: room subject */}
            <p className="text-[10px] text-gray-900 line-clamp-2 flex-1 my-1">
              {room_subject}
            </p>
            
            {/* Tercera línea: tiempo online y viewers */}
            <div className="flex items-center justify-between text-[10px] text-gray-700">
              <div className="flex items-center gap-0.5">
                <Clock className="w-3 h-3" />
                <span>{formatTime(seconds_online)}, {num_users} viewers</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default ModelCard;