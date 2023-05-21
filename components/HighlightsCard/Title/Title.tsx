import React, { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLHeadElement>;

function Title({ ...props }: Props) {
  return (
    <h2 {...props} className="font-bold md:text-3xl text-xl line-clamp-2">
      {props.children}
    </h2>
  );
}

export default Title;