import type { MDXComponents as MDXComponentsType } from "mdx/types";
import Link from "next/link";

export const MDXComponents: MDXComponentsType = {
  a: (props) => {
    const href = (props as any).href as string | undefined;
    const isExternal = href?.startsWith("http");
    if (isExternal) {
      return <a {...props} target="_blank" rel="noreferrer" />;
    }
    return <Link href={href ?? "#"}>{(props as any).children}</Link>;
  },
  code: (props) => {
    return (
      <code
        {...props}
        className={[
          "rounded-md bg-section-bg px-1.5 py-0.5 text-[0.9em]",
          (props as any).className ?? ""
        ].join(" ")}
      />
    );
  }
};
