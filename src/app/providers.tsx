"use client";

import { useState, type ReactNode } from "react";
import { WagmiProvider } from "wagmi";

import { config } from "@/wagmi";
import { QueryProvider } from "./react-query-provider";

export function Providers(props: { children: ReactNode }) {
  return (
    <QueryProvider>
      <WagmiProvider config={config}>{props.children} </WagmiProvider>
    </QueryProvider>
  );
}
