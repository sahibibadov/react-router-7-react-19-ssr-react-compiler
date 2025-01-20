import { cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

const containerStyles = cva("mx-auto w-full max-w-[1400px]", {
  variants: {
    intent: {
      "padded-content": "px-4",
    },
  },
  defaultVariants: {
    intent: "padded-content",
  },
});

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  intent?: "padded-content";
  ref?: React.Ref<HTMLDivElement>;
  children: React.ReactNode;
  asChild?: boolean;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, intent, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp className={containerStyles({ intent, className })} {...props} ref={ref}>
        {children}
      </Comp>
    );
  },
);
Container.displayName = "Container";

export type { ContainerProps };
export { Container };
