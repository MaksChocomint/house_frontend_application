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
    <div className={"px-4 tablet:px-10 laptop:px-40 desktop:px-60 " + styles}>
      {children}
    </div>
  );
}
