
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const ReportViewer = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-full h-[calc(100vh-12rem)]">
      <Tabs defaultValue="report" className="w-full">
        <TabsList className="w-full bg-white/5 backdrop-blur-sm border border-white/10">
          <TabsTrigger value="report" className="flex-1">
            Latest Report
          </TabsTrigger>
          <TabsTrigger value="history" className="flex-1">
            Report History
          </TabsTrigger>
        </TabsList>
        <TabsContent value="report" className="mt-4">
          <div className="glass-card overflow-hidden relative">
            {isLoading && (
              <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
                <div className="text-primary animate-pulse">Loading report...</div>
              </div>
            )}
            <iframe
              src="https://preview--interview-genie-interface.lovable.app/"
              className="w-full h-[calc(100vh-16rem)] border-0"
              onLoad={() => setIsLoading(false)}
              title="Interview Report"
            />
          </div>
        </TabsContent>
        <TabsContent value="history" className="mt-4">
          <div className="glass-card p-8 text-center">
            <h3 className="text-lg font-medium text-white mb-2">Report History</h3>
            <p className="text-white/70">
              Previous reports will be displayed here.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ReportViewer;
