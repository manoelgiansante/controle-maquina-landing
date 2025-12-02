import { MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function WhatsAppButton() {
  const { t } = useTranslation();
  const whatsappNumber = "5517997497208";
  const message = t('whatsapp.message');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:scale-110 hover:bg-green-600 hover:shadow-xl md:h-16 md:w-16"
      aria-label={t('whatsapp.tooltip')}
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
    </a>
  );
}
