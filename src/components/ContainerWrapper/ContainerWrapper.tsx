import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ContainerWrapper({ children }: Props) {
  return <div className="container">{children}</div>;
}
