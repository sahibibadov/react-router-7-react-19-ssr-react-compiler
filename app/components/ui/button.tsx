import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { useState, useEffect } from "react";

import { cn } from "~/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  rippleColor?: string;
  duration?: string;
  noRipple?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, rippleColor, duration = "600ms", noRipple = false, onClick, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const [buttonRipples, setButtonRipples] = useState<Array<{ x: number; y: number; size: number; key: number }>>([]);

    const getDefaultRippleColor = () => {
      switch (variant) {
        case "default":
          return "rgba(255, 255, 255, 0.2)";
        case "destructive":
          return "rgba(255, 255, 255, 0.5)";
        case "outline":
          return "rgba(210, 210, 210, 0.5)";
        case "secondary":
          return "rgba(0, 0, 0, 0.2)";
        case "ghost":
          return "rgba(180, 180, 180, 0.5)";
        case "link":
          return "rgba(193, 193, 193, 0.5)";
        default:
          return "rgba(255, 255, 255, 0.2)";
      }
    };

    const finalRippleColor = rippleColor || getDefaultRippleColor();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!noRipple) {
        createRipple(event);
      }
      onClick?.(event);
    };

    const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
      const button = event.currentTarget;
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;

      const newRipple = { x, y, size, key: Date.now() };
      setButtonRipples((prevRipples) => [...prevRipples, newRipple]);
    };

    useEffect(() => {
      if (buttonRipples.length > 0) {
        const lastRipple = buttonRipples[buttonRipples.length - 1];
        const timeout = setTimeout(() => {
          setButtonRipples((prevRipples) => prevRipples.filter((ripple) => ripple.key !== lastRipple.key));
        }, parseInt(duration));
        return () => clearTimeout(timeout);
      }
    }, [buttonRipples, duration]);

    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} onClick={handleClick} {...props}>
        {asChild ? (
          props.children
        ) : (
          <>
            <div className="relative z-10">{props.children}</div>
            {!noRipple && (
              <span className="pointer-events-none absolute inset-0">
                {buttonRipples.map((ripple) => (
                  <span
                    className="absolute animate-rippling rounded-full opacity-70"
                    key={ripple.key}
                    style={
                      {
                        width: `${ripple.size}px`,
                        height: `${ripple.size}px`,
                        top: `${ripple.y}px`,
                        left: `${ripple.x}px`,
                        backgroundColor: finalRippleColor,
                        transform: `scale(0)`,
                        "--duration": duration,
                      } as React.CSSProperties
                    }
                  />
                ))}
              </span>
            )}
          </>
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
