
import Navbar from "@/components/navigation/Navbar";
import DashboardCard from "@/components/dashboard/DashboardCard";
import { FileText, Calendar, Settings, Video } from "lucide-react";

const EducatorDashboard = () => {
  const cards = [
    {
      title: "View Candidate Reports",
      description: "Review interview performances and provide feedback",
      icon: FileText,
      to: "/educator/reports",
    },
    {
      title: "Schedule Interviews",
      description: "Manage upcoming interview sessions",
      icon: Calendar,
      to: "/educator/schedule",
    },
    {
      title: "Live Interview Mode",
      description: "Start or join live interview sessions",
      icon: Video,
      to: "/educator/live",
    },
    {
      title: "Profile & Settings",
      description: "Manage your account and preferences",
      icon: Settings,
      to: "/educator/profile",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      <Navbar />
      <main className="container py-8 animate-fade-up">
        <div className="space-y-2 mb-8">
          <h1 className="text-3xl font-bold">Educator Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what you can do:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {cards.map((card) => (
            <DashboardCard key={card.title} {...card} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default EducatorDashboard;
