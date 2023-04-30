"use client";

import { ColLayout } from "@/Components/ColLayout";
import { Divider } from "@fluentui/react-components";
import { Comment } from "./Comment";
import { ArticleContent } from "./Content";
import { PostComment } from "./Post";

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export default function ArtiPage({ params }: { params: { id: string } }) {
  return (
    <ColLayout>
      <ArticleContent Id={parseInt(params.id)} />

      <Divider />

      <PostComment />

      <Divider />

      <Comment />
    </ColLayout>
  )
}
