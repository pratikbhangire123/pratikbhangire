import { motion } from "framer-motion";

// bg-gradient-to-t from-colorAccent/90 via-colorAccent/40 to-colorAccent/10

function Button({ variant = "primary", className, props, children, onClick }) {
  const variantClasses = {
    primary:
      "font-medium text-colorSecondaryLight backdrop-blur-sm ring-1 ring-colorPrimaryLight/50",
    secondary:
      "text-colorSecondaryLighter border-[1px] border-colorSecondaryLighter/20",
  };

  return (
    <motion.button
      initial={
        variant == "primary" && {
          background:
            "linear-gradient(to top, #ff5c00E6, #ff5c0066, #ff5c001A)",
        }
      }
      whileHover={
        variant == "primary"
          ? {
              background: [
                "linear-gradient(to top, #ff5c00E6, #ff5c0066, #ff5c001A)",
                "linear-gradient(to top, #ff5c001A, #ff5c00, #ff5c00E6)",
              ],
            }
          : {
              borderColor: "#B0B0B0",
            }
      }
      transition={{ duration: 0.5, ease: "easeIn" }}
      className={`inline-flex items-center justify-center px-3 md:px-4 xl:px-5 py-2 xl:py-3 text-sm md:text-base xl:text-lg rounded-full ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default Button;
