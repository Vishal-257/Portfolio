// ✅ CHANGED: Updated the type of `ref` parameter
import { useEffect } from "react";
import React from "react";
export function useOutsideClick(
  ref: React.RefObject<HTMLElement | null>, // ⬅️ CHANGED HERE
  handler: () => void
) {
  React.useEffect(() => {
    function handleClick(event: MouseEvent) {
      // ✅ CHANGED: Added null check safely
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [ref, handler]);
}
