import Image, { ImageProps } from "next/image";
import React, { HTMLAttributes } from "react";

type CardImageProps = ImageProps & {
  containerProps?: HTMLAttributes<HTMLDivElement>;
};

function CardImage({ containerProps, ...props }: CardImageProps) {
  return (
    <div
      {...containerProps}
      className="rounded-full z-10 transition-transform duration-300 hover:shadow transform-gpu hover:scale-110 overflow-hidden h-20 w-20 py-2"
    >
      <Image
        {...props}
        alt={props?.alt}
        className={`${props.className} object-cover w-full h-full`}
      />
    </div>
  );
}
export default CardImage;
