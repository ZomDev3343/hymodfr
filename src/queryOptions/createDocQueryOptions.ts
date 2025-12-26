import { queryOptions } from "@tanstack/react-query";

export default function createDocQueryOptions(docFile: string) {
  return queryOptions({
    queryKey: ["docs", docFile],
    queryFn: () => getDoc(docFile),
    staleTime: 1000 * 60 * 60 * 24,
  });
}

const getDoc = async (docFile: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(docFile);
  return response.text();
};
