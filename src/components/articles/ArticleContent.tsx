import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { useSuspenseQuery } from "@tanstack/react-query";
import createDocQueryOptions from "../../queryOptions/createDocQueryOptions.ts";

type ArticleContentProps = {
  docFile: string;
  components?: Components;
};

export default function ArticleContent({
  docFile,
  components,
}: ArticleContentProps) {
  const { data } = useSuspenseQuery(createDocQueryOptions(docFile));

  return (
    <div
      className={
        "prose prose-invert p-8 items-center justify-center mx-auto max-w-1/2 bg-black/60 rounded-2xl"
      }
    >
      <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
        {data}
      </ReactMarkdown>
    </div>
  );
}
