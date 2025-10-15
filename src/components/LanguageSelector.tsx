import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe } from "lucide-react";
import { useState } from "react";

const languages = [
  { code: "es", name: "Spanish", flag: "🇪🇸" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "de", name: "German", flag: "🇩🇪" },
  { code: "it", name: "Italian", flag: "🇮🇹" },
  { code: "pt", name: "Portuguese", flag: "🇵🇹" },
  { code: "ja", name: "Japanese", flag: "🇯🇵" },
  { code: "ko", name: "Korean", flag: "🇰🇷" },
  { code: "zh", name: "Chinese", flag: "🇨🇳" },
  { code: "ar", name: "Arabic", flag: "🇸🇦" },
  { code: "hi", name: "Hindi", flag: "🇮🇳" },
  { code: "ru", name: "Russian", flag: "🇷🇺" },
  { code: "nl", name: "Dutch", flag: "🇳🇱" },
];

export const LanguageSelector = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleLanguage = (code: string) => {
    setSelected(prev =>
      prev.includes(code)
        ? prev.filter(c => c !== code)
        : [...prev, code]
    );
  };

  return (
    <Card className="border-border bg-card/50 backdrop-blur-sm p-8">
      <div className="flex items-center gap-3 mb-6">
        <Globe className="h-6 w-6 text-primary" />
        <h3 className="text-2xl font-semibold">Select Target Languages</h3>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => toggleLanguage(lang.code)}
            className={`p-4 rounded-lg border-2 transition-all text-left ${
              selected.includes(lang.code)
                ? "border-primary bg-primary/10"
                : "border-border hover:border-primary/50"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">{lang.flag}</span>
              <span className="font-medium">{lang.name}</span>
            </div>
          </button>
        ))}
      </div>
      
      {selected.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {selected.map(code => {
            const lang = languages.find(l => l.code === code);
            return (
              <Badge key={code} variant="secondary" className="px-3 py-1">
                {lang?.flag} {lang?.name}
              </Badge>
            );
          })}
        </div>
      )}
    </Card>
  );
};
