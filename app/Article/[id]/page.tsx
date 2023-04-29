"use client";

import { ColLayout } from "@/Components/ColLayout";
import { Divider } from "@fluentui/react-components";
import { Comment } from "./Comment";
import { ArticleContent } from "./Content";
import { PostComment } from "./PostComment";

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export default function ArtiPage({ id }: { id: number }) {
  return (
    <ColLayout>
      <ArticleContent />

      <Divider />

      <PostComment />

      <Comment />
    </ColLayout>
  )
}
