import { VideoUpload } from "@/components/VideoUpload";
import { LanguageSelector } from "@/components/LanguageSelector";
import { VoiceSample } from "@/components/VoiceSample";
import { ProcessingStatus } from "@/components/ProcessingStatus";
import { Button } from "@/components/ui/button";
import { Sparkles, Video, Globe, Mic } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Video Localization</span>
          </div> */}
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Localize Videos in
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Any Language
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Transform your content for global audiences with AI-driven transcription, translation, and voice cloning
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2 px-6 py-3 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
              <Video className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">High-Quality Processing</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
              <Globe className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">50+ Languages</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
              <Mic className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Voice Cloning</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-16 space-y-12">
        <VideoUpload />
        <LanguageSelector />
        <VoiceSample />
        
        <div className="flex justify-center pt-8">
          <Button size="lg" className="px-12 py-6 text-lg">
            <Sparkles className="h-5 w-5 mr-2" />
            Start Localization
          </Button>
        </div>
        
        <ProcessingStatus />
      </section>
    </div>
  );
};

export default Index;
