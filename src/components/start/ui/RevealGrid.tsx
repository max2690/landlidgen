import {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";

export type RevealVariant =
  | "fade-up"
  | "fade-left"
  | "fade-right"
  | "scale-up"
  | "blur-up"
  | "flip-up"
  | "glow-in";

type RevealGridProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  variant?: RevealVariant;
};

export function RevealGrid({
  children,
  className = "",
  stagger = 120,
  variant = "scale-up",
}: RevealGridProps) {
  return (
    <div className={className} data-stagger={stagger}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child;

        const element = child as ReactElement<{
          "data-reveal"?: RevealVariant;
          "data-reveal-index"?: number;
        }>;

        return cloneElement(element, {
          "data-reveal": element.props["data-reveal"] ?? variant,
          "data-reveal-index": index,
        });
      })}
    </div>
  );
}
