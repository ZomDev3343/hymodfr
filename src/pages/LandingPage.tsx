import Background from "../components/common/Background.tsx";
import ArticleContent from "../components/articles/ArticleContent.tsx";
import { DOCS } from "../utils/Constants.ts";
import { Spinner } from "../components/ui/spinner.tsx";
import { Suspense } from "react";
import Footer from "../components/common/Footer.tsx";

export default function LandingPage() {
  return (
    <Background>
      <div
        id={"landing-page"}
        className={"h-screen w-screen flex-col justify-center items-center"}
      >
        <Suspense
          fallback={
            <div
              className={
                "animate-pulse duration-200 flex gap-2 items-center justify-center text-white"
              }
            >
              <Spinner />
              Loading...
            </div>
          }
        >
          <ArticleContent docFile={DOCS.TEST}></ArticleContent>
          <Footer />
        </Suspense>
      </div>
    </Background>
  );
}
