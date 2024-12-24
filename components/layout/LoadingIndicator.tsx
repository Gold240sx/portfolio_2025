"use client";

import { motion } from "framer-motion";
import { useNavigation } from "@/lib/hooks/useNavigation";
import { useTheme } from "@/lib/hooks/useTheme";

export function LoadingIndicator() {
  const { isPending } = useNavigation();
  const { theme } = useTheme();

  if (!isPending) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 w-full h-1 z-50"
    >
      <motion.div
        className="h-full"
        style={{ background: theme.colors.accent }}
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.8 }}
      />
    </motion.div>
  );
}