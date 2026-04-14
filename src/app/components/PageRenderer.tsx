import { ReactNode } from "react";
import { Render } from "@measured/puck";
import { usePageContent } from "../hooks/usePageContent";
import { puckConfig } from "../admin/components/PuckComponents";

interface PageRendererProps {
  slug: string;
  fallback: ReactNode;
}

export default function PageRenderer({ slug, fallback }: PageRendererProps) {
  const { data, loading, error } = usePageContent(slug);

  if (loading) {
    return (
      <div className="pt-16" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="w-8 h-8 border-4 border-cipher/30 border-t-cipher rounded-full animate-spin"></div>
      </div>
    );
  }

  // If we have Puck content (specifically checking if it's a valid Puck object with content blocks)
  if (!error && data?.content?.root && data?.content?.content?.length > 0) {
    return (
      <div className="pt-16">
        <Render config={puckConfig} data={data.content} />
      </div>
    );
  }

  // Fallback to static hardcoded design
  return <>{fallback}</>;
}
