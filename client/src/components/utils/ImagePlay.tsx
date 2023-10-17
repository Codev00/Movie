import tmdbConfig from "@/api/config/tmdb.config";
import Image from "next/image";
import React from "react";
import { PlayIcon } from "./PlayIcon";
import "./ImagePlay.css";

const ImagePlay = ({
   imgSrc,
   alt,
   height,
   width,
   className,
   onClick,
}: {
   imgSrc: string;
   alt: string;
   width: number;
   height: number;
   className?: string;
   onClick?: () => void;
}) => {
   return (
      <div className="relative videoThumbnail ">
         <Image
            src={tmdbConfig.posterPath(imgSrc)}
            width={width}
            height={height}
            alt={alt}
            className={className}
            onClick={onClick}
         />
         <PlayIcon />
      </div>
   );
};

export default ImagePlay;
