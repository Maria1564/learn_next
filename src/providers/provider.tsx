"use client";

import { HeroUIProvider } from "@heroui/system";

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return <HeroUIProvider>{children}</HeroUIProvider>;
};

export default Providers;
