import localFont from "next/font/local";

const anton = localFont({
  src: "../public/fonts/Anton-Regular.woff2",
  display: "swap",
});

import dynamic from "next/dynamic";
const GalleryList = dynamic(() => import("../lib/GalleryList"), {
  ssr: false,
});

export default function Gallery() {
  return (
    <section className="gallery min-h-[50vh] overflow-hidden flex justify-center items-center relative">
      <h2
        className={`${anton.className} text-center min-[290px]:text-8xl md:text-[10rem] text-[#fed049] z-10`}
        id="fit-zone"
      >
        <span className="text-[#ffffdd]">#</span>Fit Zone
      </h2>
      <GalleryList />
    </section>
  );
}
