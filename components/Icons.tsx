import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function Arrow(props: IconProps) {
  return <svg {...base} {...props}><path d="M5 12h13M13 6l6 6-6 6" /></svg>;
}

export function Layers(props: IconProps) {
  return <svg {...base} {...props}><path d="m12 3-9 5 9 5 9-5-9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></svg>;
}

export function Search(props: IconProps) {
  return <svg {...base} {...props}><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>;
}

export function Plug(props: IconProps) {
  return <svg {...base} {...props}><path d="m8 12 8-8M14 4l6 6M4 14l6 6M4 20l5-5M15 9l-5 5"/></svg>;
}

export function File(props: IconProps) {
  return <svg {...base} {...props}><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v5h5M9 12h6M9 16h6"/></svg>;
}

export function Share(props: IconProps) {
  return <svg {...base} {...props}><circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="m8.3 10.8 7.4-4.5M8.3 13.2l7.4 4.5"/></svg>;
}

export function Cloud(props: IconProps) {
  return <svg {...base} {...props}><path d="M6.5 19h11a4.5 4.5 0 0 0 .5-9A6.5 6.5 0 0 0 5.4 8.2 5.5 5.5 0 0 0 6.5 19Z"/></svg>;
}

export function Check(props: IconProps) {
  return <svg {...base} {...props}><path d="m5 12 4 4L19 6"/></svg>;
}

export function Shield(props: IconProps) {
  return <svg {...base} {...props}><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-5"/></svg>;
}

export function Branch(props: IconProps) {
  return <svg {...base} {...props}><circle cx="6" cy="4" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="20" r="2"/><path d="M6 6v12M8 8c5 0 5-2 8-2"/></svg>;
}

export function Lock(props: IconProps) {
  return <svg {...base} {...props}><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>;
}

export function Upload(props: IconProps) {
  return <svg {...base} {...props}><path d="M12 16V3M7 8l5-5 5 5M4 15v5h16v-5"/></svg>;
}

export function LinkedIn(props: IconProps) {
  return <svg {...base} {...props}><path d="M7 9v10M7 5.5v.01M11 19v-5.5a4 4 0 0 1 8 0V19M11 9v10"/><circle cx="7" cy="5.5" r="1" fill="currentColor" stroke="none"/></svg>;
}

export function Facebook(props: IconProps) {
  return <svg {...base} {...props}><path d="M14 8h4V3h-4a5 5 0 0 0-5 5v3H6v5h3v5h5v-5h4l1-5h-5V8a1 1 0 0 1 1-1"/></svg>;
}

export function Twitter(props: IconProps) {
  return <svg {...base} {...props}><path d="M4 4l16 16M20 4 4 20M8.5 4H4l11.5 16H20L8.5 4Z"/></svg>;
}

export function GitHub(props: IconProps) {
  return <svg {...base} {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7.4A5.8 5.8 0 0 0 19.3 3 5.4 5.4 0 0 0 19.1 1S17.9.6 15 2.5a14 14 0 0 0-7 0C5.1.6 3.9 1 3.9 1a5.4 5.4 0 0 0-.2 2A5.8 5.8 0 0 0 2.2 7c0 5.8 3.5 7 6.8 7.4A4.8 4.8 0 0 0 8 18v4M8 19c-3 .9-3-1.5-4.2-2"/></svg>;
}
