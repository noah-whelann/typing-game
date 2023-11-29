"use client";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from 'next-themes';
import React from "react";

interface ProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

const Provider = ({ children }: ProviderProps) => {
  return <ThemeProvider><SessionProvider>{children}</SessionProvider></ThemeProvider>;
};

export default Provider;
