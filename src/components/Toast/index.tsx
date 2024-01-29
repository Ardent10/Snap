import { useEffect, useRef } from "react";
import "./index.css";

import { ToastContainer, toast, ToastOptions, Id } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToastProps {
  msg: string;
  type: "success" | "error" | "warning" | "info";
}

export default function Toast({ msg, type }: ToastProps) {
  const toastIdRef = useRef<Id | undefined | null>(null);
  useEffect(() => {
    if (msg) {
      const options: ToastOptions = { toastId: toastIdRef.current as Id };

      switch (type) {
        case "success":
          toastIdRef.current = toast.success(msg, options);
          break;
        case "error":
          toastIdRef.current = toast.error(msg, options);
          break;
        case "warning":
          toastIdRef.current = toast.warning(msg, options);
          break;
        case "info":
          toastIdRef.current = toast.info(msg, options);
          break;
        default:
          toastIdRef.current = toast(msg, options);
          break;
      }
    }
    return () => {
      if (toastIdRef.current !== null) {
        toast.dismiss(toastIdRef.current);
        toastIdRef.current = null;
      }
    };
  }, [toastIdRef, msg, type]);

  return (
    <ToastContainer
      toastClassName="toast"
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
}
