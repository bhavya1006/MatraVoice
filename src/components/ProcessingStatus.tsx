import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Check, Loader2 } from "lucide-react";

interface Step {
  name: string;
  status: "pending" | "processing" | "completed";
}

export const ProcessingStatus = () => {
  const steps: Step[] = [
    { name: "Video Analysis", status: "completed" },
    { name: "Audio Extraction", status: "completed" },
    { name: "Speech Transcription", status: "processing" },
    { name: "Translation", status: "pending" },
    { name: "Voice Synthesis", status: "pending" },
    { name: "Audio Synchronization", status: "pending" },
  ];

  const progress = (steps.filter(s => s.status === "completed").length / steps.length) * 100;

  return (
    <Card className="border-border bg-card/50 backdrop-blur-sm p-8">
      <h3 className="text-2xl font-semibold mb-6">Processing Status</h3>
      
      <Progress value={progress} className="mb-8" />
      
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 border border-border"
          >
            <div className="flex-shrink-0">
              {step.status === "completed" && (
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="h-5 w-5 text-primary" />
                </div>
              )}
              {step.status === "processing" && (
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Loader2 className="h-5 w-5 text-primary animate-spin" />
                </div>
              )}
              {step.status === "pending" && (
                <div className="h-8 w-8 rounded-full bg-muted"></div>
              )}
            </div>
            
            <div className="flex-1">
              <p className={`font-medium ${
                step.status === "pending" ? "text-muted-foreground" : "text-foreground"
              }`}>
                {step.name}
              </p>
            </div>
            
            <div className="text-sm text-muted-foreground">
              {step.status === "completed" && "Complete"}
              {step.status === "processing" && "In Progress..."}
              {step.status === "pending" && "Waiting"}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
