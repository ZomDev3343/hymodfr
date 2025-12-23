import ReactMarkdown from 'react-markdown';
import {Suspense, useEffect, useState} from "react";
import remarkGfm from "remark-gfm";

type ArticleContentProps = {
    docFile: string
}

export default function ArticleContent({docFile}: ArticleContentProps) {

    const [content, setContent] = useState<string>("");

    useEffect(() => {
        fetch(docFile)
            .then((res) => res.text())
            .then((text) => setContent(text));
    }, [docFile]);

    return <div className={"prose prose-invert max-h-[90%] p-8"}>
        <Suspense fallback={<div>Loading...</div>}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </Suspense>
    </div>
}