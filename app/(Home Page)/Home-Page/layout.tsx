import HeaderHome from "@/shared/HeaderHome";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fit Zone | Food Estimation Website | SHome Page",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <HeaderHome />
      {children}
    </section>
  );
}
