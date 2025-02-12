
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface DashboardCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
}

const DashboardCard = ({ title, description, icon: Icon, to }: DashboardCardProps) => {
  return (
    <Link to={to} className="block group">
      <div className="glass-card card-hover p-8 h-full bg-gradient-to-br from-white/[0.08] to-transparent">
        <div className="flex items-start space-x-4">
          <div className="icon-container group-hover:bg-primary/15 transition-colors">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg text-white">{title}</h3>
            <p className="text-white/70 text-sm leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DashboardCard;
