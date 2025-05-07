import * as motion from "motion/react-client";

export default function WildcardKeyframes({ children }) {
  return (
    <motion.div
      style={box}
      /**
       * Setting the initial keyframe to "null" will use
       * the current value to allow for interruptable keyframes.
       */
      whileHover={{
        scale: [null, 1.1, 1.6],
        transition: {
          duration: 0.5,
          times: [0, 0.6, 1],
          ease: ["easeInOut", "easeOut"],
        },
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * ==============   Styles   ================
 */

const box = {
  width: 250,
  height: 60,
  backgroundColor: "rgb(255, 179, 66)",
  borderRadius: 5,
};
