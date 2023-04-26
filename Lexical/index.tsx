import { lazy, Suspense } from "react";
import type { ILexical } from "./Context/Setting";

/**
 * Lexical 文本编辑器
 *
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
export function Lexical(props: ILexical) {
  return (
    <Suspense>
      <Wrapper {...props} />
    </Suspense>
  );
}

const Wrapper = lazy(() => import("./Wrapper"));
