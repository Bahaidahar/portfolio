import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

interface DialogProps {
  triggerContent: ReactNode;
}

export const Dialog = ({ triggerContent }: DialogProps) => {
  const t = useTranslations("Projects");
  const message = t("message");
  const messangers = [
    {
      item: faTelegram,
      href: `https://t.me/bahaebaha`,
      text: "Telegram",
    },
    {
      item: faWhatsapp,
      href: "https://wa.me/87057315777?text=" + encodeURIComponent(message),
      text: "Whatsapp",
    },
  ];

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="group inline-flex items-center px-6 py-3 rounded-full dark:hover:bg-white/20 hover:bg-black/10 transition duration-300 ease-in-out">
          {triggerContent}
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className=" bg-white/20 backdrop-blur-xl">
        <AlertDialogHeader>
          <AlertDialogTitle>{t("how-contact")}</AlertDialogTitle>
          <AlertDialogDescription>
            <div className="grid md:grid-cols-2 gap-4">
              {messangers.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  target="_blank"
                  className="hover:scale-105 transition-all duration-300 ease-in-out hover:text-purple-200 cursor-pointer flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={item.item} size="3x" />
                  <p>{item.text}</p>
                </Link>
              ))}
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{t("cancel")}</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
