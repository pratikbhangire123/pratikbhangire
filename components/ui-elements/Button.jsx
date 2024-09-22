import { forwardRef } from "react";
import { motion } from "framer-motion";

const Button = forwardRef(
  ({ vairant = "primary", className, props, children }, ref) => {
    const variantClasses = {
      primary: `font-medium text-colorSecondaryLight bg-gradient-to-t from-colorAccent/90 via-colorAccent/40 to-colorAccent/10 backdrop-blur-sm ring-1 ring-colorPrimaryLight/50`,
    };

    return (
      <motion.button
        ref={ref}
        className={`inline-flex items-center justify-center px-3 md:px-4 xl:px-5 py-1 md:py-2 xl:py-3 text-sm md:text-base xl:text-lg rounded-full ${variantClasses[vairant]} ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

export default Button;
