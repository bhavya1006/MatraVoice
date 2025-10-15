import { Mic, Upload } from "lucide-react";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const VoiceSample = () => {
  const [recording, setRecording] = useState(false);
  const [audioFile, setAudioFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAudioFile(e.target.files[0]);
    }
  };

  return (
    <Card className="border-border bg-card/50 backdrop-blur-sm p-8">
      <div className="flex items-center gap-3 mb-6">
        <Mic className="h-6 w-6 text-primary" />
        <h3 className="text-2xl font-semibold">Voice Cloning Sample</h3>
      </div>
      
      <p className="text-muted-foreground mb-6">
        Upload a voice sample for AI-powered voice cloning. The dubbing will match your voice characteristics.
      </p>
      
      <div className="space-y-4">
        <div className="flex gap-4">
          <Button
            variant={recording ? "destructive" : "secondary"}
            className="flex-1"
            onClick={() => setRecording(!recording)}
          >
            <Mic className="h-4 w-4 mr-2" />
            {recording ? "Stop Recording" : "Record Voice Sample"}
          </Button>
          
          <div className="relative flex-1">
            <input
              type="file"
              accept="audio/*"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <Button variant="secondary" className="w-full">
              <Upload className="h-4 w-4 mr-2" />
              Upload Audio File
            </Button>
          </div>
        </div>
        
        {audioFile && (
          <div className="p-4 bg-secondary/50 rounded-lg border border-border">
            <p className="text-sm font-medium text-foreground">{audioFile.name}</p>
            <p className="text-xs text-muted-foreground mt-1">
              {(audioFile.size / 1024).toFixed(2)} KB
            </p>
          </div>
        )}
        
        {recording && (
          <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/50">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 bg-destructive rounded-full animate-pulse"></div>
              <p className="text-sm font-medium">Recording in progress...</p>
            </div>
          </div>
        )}
      </div>
      
      <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
        <p className="text-sm text-muted-foreground">
          💡 <strong>Tip:</strong> Record 30-60 seconds of clear speech for best results. Speak naturally in a quiet environment.
        </p>
      </div>
    </Card>
  );
};
