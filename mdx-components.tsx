import type { ComponentType } from "react";

type MdxComponents = Record<string, string | ComponentType<Record<string, unknown>>>;

export function useMDXComponents(components: MdxComponents = {}): MdxComponents {
  return components;
}
