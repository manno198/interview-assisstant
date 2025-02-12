
import { useNavigate } from "react-router-dom";
import { GraduationCap, Users } from "lucide-react";
import RoleCard from "@/components/role/RoleCard";

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="w-full max-w-4xl animate-fade-up">
        <div className="text-center mb-12 space-y-2">
          <h1 className="text-4xl font-bold text-white">Welcome to Interview Insight</h1>
          <p className="text-white/70 text-lg">
            Select your role to continue
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 px-4">
          <RoleCard
            title="Student"
            description="Access practice interviews, schedule sessions, and track your progress"
            icon={GraduationCap}
            onClick={() => navigate("/student/dashboard")}
          />
          <RoleCard
            title="Educator"
            description="Manage interviews, review candidates, and provide feedback"
            icon={Users}
            onClick={() => navigate("/educator/dashboard")}
          />
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
