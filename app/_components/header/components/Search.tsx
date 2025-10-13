"use client";

import { useState } from "react";
import { Input, Button } from "@heroui/react";
import { LucideSearch } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Search() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex items-center justify-end">
      <Button
        isIconOnly
        variant="shadow"
        onClickCapture={() => setOpen((prev) => !prev)}
      >
        <LucideSearch size="20px" />
      </Button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ width: 0, opacity: 0, x: 50 }}
            animate={{ width: 200, opacity: 1, x: 0 }}
            exit={{ width: 0, opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="absolute left-12 focus-within:border-none"
          >
            <Input
              placeholder="جستجوی پزشکان ، مراکز و ..."
              size="sm"
              variant="flat"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
