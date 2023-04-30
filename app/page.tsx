"use client";

import { ColLayout } from "@/Components/ColLayout";
import { useRequest } from "ahooks";
import { PostCard } from "../Components/PostCard";

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export default function HomePage() {
  const { data } = useRequest(async () => {
    const res = await fetch(`/api/Article`);
    return await res.json() as number[];
  }, {
    cacheKey: `list`
  });

  return (
    <ColLayout>
      {data?.map(x => <PostCard Id={x} />)}
    </ColLayout>
  )
}
