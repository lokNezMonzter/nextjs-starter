import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";
import { BackButtonProps } from "@/common/types";

export default function BackButton({ text, link }: BackButtonProps) {
  return (
    <Link
      href={link}
      className="text-gray-500 hover:underline flex items-center gap-1 font-bold mb-5"
    >
      <ArrowLeftCircle width={20} height={20} /> {text}
    </Link>
  );
}
