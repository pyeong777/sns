"use client";

import axios from "axios";
import { SWRConfig } from "swr";

type Props = {
  children: React.ReactNode;
};

export const SWRConfigContext = ({ children }: Props) => {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => axios.get(url).then((res) => res.data),
      }}
    >
      {children}
    </SWRConfig>
  );
};
