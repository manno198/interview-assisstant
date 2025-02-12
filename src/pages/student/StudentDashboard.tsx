
import Navbar from "@/components/navigation/Navbar";
import DashboardCard from "@/components/dashboard/DashboardCard";
import { FileText, Calendar, UserCircle, PlayCircle } from "lucide-react";

const StudentDashboard = () => {
  const cards = [
    {
      title: "View Reports",
      description: "Check your interview performance and feedback",
      icon: FileText,
      to: "/student/reports",
    },
    {
      title: "Schedule Interview",
      description: "Book a new interview session",
      icon: Calendar,
      to: "/student/schedule",
    },
    {
      title: "Profile Management",
      description: "Update your personal information and preferences",
      icon: UserCircle,
      to: "/student/profile",
    },
    {
      title: "Practice Mode",
      description: "Practice with AI-powered mock interviews",
      icon: PlayCircle,
      to: "/student/practice",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container py-8 animate-fade-up">
        <div className="space-y-2 mb-8">
          <h1 className="text-3xl font-bold text-white">Student Dashboard</h1>
          <p className="text-white/70">
            Welcome back! Here's what you can do:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {cards.map((card) => (
            <DashboardCard key={card.title} {...card} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
