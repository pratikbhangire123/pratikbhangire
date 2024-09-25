import { motion } from "framer-motion";

function Button({ variant = "primary", className, props, children, onClick }) {
  const variantClasses = {
    primary:
      "font-medium text-colorSecondaryLight bg-gradient-to-t from-colorAccent/90 via-colorAccent/40 to-colorAccent/10 backdrop-blur-sm ring-1 ring-colorPrimaryLight/50",
    secondary: "text-colorSecondaryLighter ring-1 ring-colorSecondaryLighter/20",
  };

  return (
    <motion.button
      className={`inline-flex items-center justify-center px-3 md:px-4 xl:px-5 py-2 xl:py-3 text-sm md:text-base xl:text-lg rounded-full ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default Button;
