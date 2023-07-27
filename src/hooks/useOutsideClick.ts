import { useEffect, useRef } from "react";

export default function useOutsideClick(handler, listeningCapture = true) {
  const ref = useRef();
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    }

    document.addEventListener("click", handleClick, listeningCapture);
    return () => {
      document.removeEventListener("click", handleClick, listeningCapture);
    };
  }, [handler, listeningCapture]);
  return ref;
}
