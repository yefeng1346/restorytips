import type { ReactNode } from "react";

type CalloutProps = {
  title: string;
  tone?: "teal" | "gold";
  children: ReactNode;
};

export function Callout({ title, tone = "teal", children }: CalloutProps) {
  return (
    <aside className={`callout callout-${tone}`}>
      <strong>{title}</strong>
      <div>{children}</div>
    </aside>
  );
}

type RepairStepProps = {
  number: string;
  title: string;
  children: ReactNode;
};

export function RepairStep({ number, title, children }: RepairStepProps) {
  return (
    <div className="repair-step">
      <span className="repair-step__number">{number}</span>
      <div>
        <h3>{title}</h3>
        <div className="repair-step__body">{children}</div>
      </div>
    </div>
  );
}

type SourceNoteProps = {
  href: string;
  children: ReactNode;
};

export function SourceNote({ href, children }: SourceNoteProps) {
  return (
    <span className="source-note">
      <span>Official source</span>
      <a href={href} target="_blank" rel="noreferrer">
        {children} ↗
      </a>
    </span>
  );
}

export const mdxComponents = {
  Callout,
  RepairStep,
  SourceNote,
};
