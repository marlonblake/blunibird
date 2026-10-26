import { useEffect } from "react";

export const formatDate = (iso) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

export const paragraphs = (body) => body.trim().split(/\n\s*\n/);

export function excerpt(piece) {
  const text = piece.body.trim();
  if (piece.type === "poem") return text.split("\n").slice(0, 2).join("\n") + " …";
  const first = paragraphs(text)[0];
  return first.length > 150 ? first.slice(0, 150).replace(/\s+\S*$/, "") + " …" : first;
}

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · blunibird` : "blunibird";
  }, [title]);
}
