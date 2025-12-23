import Background from "../components/common/Background.tsx";
import ArticleContent from "../components/articles/ArticleContent.tsx";
import {DOCS} from "../utils/Constants.ts";

export default function LandingPage() {

    return (<Background>
        <div id={"landing-page"} className={"h-screen w-screen flex justify-center items-center"}>
            <ArticleContent docFile={DOCS.TEST}></ArticleContent>
        </div>
    </Background>);
}