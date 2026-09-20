import type { ReactNode, SVGProps } from "react";

type IconName = "arrow" | "down" | "code" | "spark" | "book" | "pin" | "mail" | "chat" | "close" | "plus";

export function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <path d="M6 18 18 6M6 6h12v12" />,
    down: <path d="M12 4v16m-6-6 6 6 6-6" />,
    code: <><path d="m7 7-5 5 5 5m10-10 5 5-5 5M14 4l-4 16" /></>,
    spark: <><path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z" /></>,
    book: <><path d="M4 4h6a3 3 0 0 1 3 3v14a4 4 0 0 0-3-2H4V4Zm9 3a3 3 0 0 1 3-3h5v15h-5a4 4 0 0 0-3 2" /></>,
    pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m3 7 9 6 9-6" /></>,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    plus: <path d="M12 5v14M5 12h14" />,
    chat: <><path d="M7 4h10a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-7l-6 3v-5a4 4 0 0 1-1-2V8a4 4 0 0 1 4-4Z" /><path d="M7 9h10M7 13h6" /></>,
  };
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      {paths[name]}
    </svg>
  );
}
