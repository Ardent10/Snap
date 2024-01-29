import { FieldError } from "react-hook-form";
interface props {
  error?: FieldError;
}

export default function Error({ error }: props) {
  return error && <p className="text-xs text-red-600">{error.message}</p>;
}
