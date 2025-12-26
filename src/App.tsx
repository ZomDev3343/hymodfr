import Header from "./components/common/Header.tsx";
import type { ReactNode } from "react";

type AppProps = {
  children?: ReactNode;
};

export default function App({ children }: AppProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow p-6">{children}</main>
    </div>
  );
}
