import type { ReactNode } from "react";
import { IMAGES } from "../../utils/Constants.ts";

export default function Background(props: { children: ReactNode }) {
  const images = IMAGES.BACKGROUND_CARROUSEL;

  return (
    <div id={"app-background"}>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="flex h-full w-max blur-sm animate-marquee">
          {[...images, ...images].map((src, i) => (
            <div
              key={i}
              className="h-screen w-screen flex-shrink-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
        </div>
      </div>
      {props.children}
    </div>
  );
}
