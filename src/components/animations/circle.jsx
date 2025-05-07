import * as motion from "motion/react-client";

export default function EnterAnimation({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      style={ball}
    >
      {children}
    </motion.div>
  );
}
const ball = {
  width: 30,
  height: 30,
  backgroundColor: "rgb(255, 179, 66)",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 0,
};
