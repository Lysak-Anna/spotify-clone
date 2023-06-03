"use client";

import { MyUserContextProvider } from "@/hooks/useUser";

export interface IUserProviderProps {
  children: React.ReactNode;
}

export default function UserProvider({ children }: IUserProviderProps) {
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
}
