import Image, { ImageProps } from "next/image";
import React, { HTMLAttributes } from "react";

type CardImageProps = ImageProps & {
  containerProps?: HTMLAttributes<HTMLDivElement>;
};

function CardImage({ containerProps, ...props }: CardImageProps) {
  return (
    <div

      {...containerProps}
      className="w-full h-full rounded-xl overflow-hidden"

    >

      <Image
        {...props}
        src={props.src}
        alt={props.alt}
        fill
        className={`${props.className} object-cover w-full h-full`}
      />
      
    </div>
  );
}

export default CardImage;
