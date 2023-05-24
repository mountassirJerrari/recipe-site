import React, { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLHeadElement>;

function Title({ ...props }: Props) {
  return (
    <h2 {...props} className="font-medium text-sm line-clamp-1 py-5">
      {props.children}
    </h2>
  );
}

export default Title;
