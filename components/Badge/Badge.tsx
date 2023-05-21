import React, { HTMLAttributes } from "react";

type BadgeProps = {
  color?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, "className">;

function Badge({ color, ...props }: BadgeProps) {
  return (
    <div
      {...props}
      className={`w-fit px-3 py-1 rounded-full text-sm relative overflow-hidden group cursor-pointer`}
      style={{
        color,
        backgroundColor: "white",
        ...props.style,
      }}
    >
      <div
        className="absolute left-0 top-0 h-full w-full opacity-30 group-hover:opacity-100 z-0 transition-all duration-200"
        style={{
          backgroundColor: color,
        }}
      />
      <span className="group-hover:text-white relative z-10 transition-all duration-200">
        {props.children}
      </span>
    </div>
  );
}

export default Badge;
