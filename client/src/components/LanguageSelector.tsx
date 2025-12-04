import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { changeLanguage, SUPPORTED_LANGUAGES } from "@/lib/i18n";

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const currentLang = SUPPORTED_LANGUAGES.find(
    (lang) => lang.code === i18n.language
  ) || SUPPORTED_LANGUAGES[0];

  const handleLanguageChange = (langCode: string) => {
    console.log('Changing language to:', langCode);
    changeLanguage(langCode);
    setOpen(false);
    // Forçar atualização da página após mudança de idioma
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  // Fechar menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <div ref={menuRef} className="relative">
      <Button
        variant="outline"
        size="sm"
        className="gap-1.5 px-2.5"
        onClick={() => setOpen(!open)}
      >
        <span className="text-base">{currentLang.flag}</span>
        <Globe className="h-4 w-4" />
      </Button>
      
      {open && (
        <div className="absolute right-0 top-full mt-2 min-w-[160px] bg-popover border border-border rounded-md shadow-lg z-[9999] overflow-hidden">
          {SUPPORTED_LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center gap-2 px-3 py-2 text-sm text-left hover:bg-accent transition-colors ${
                i18n.language === lang.code ? "bg-accent" : ""
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
