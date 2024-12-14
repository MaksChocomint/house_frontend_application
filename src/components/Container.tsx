import React from "react";

type Props = {
  styles?: string;
};

export default function Container({
  children,
  styles,
}: Readonly<{
  children: React.ReactNode;
}> &
  Props) {
  return (
    <div className={"px-6 tablet:px-24 laptop:px-56 desktop:px-72 " + styles}>
      {children}
    </div>
  );
}
