
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
    <Link to={to} className="block">
      <div className="glass-card card-hover p-6 h-full">
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-primary/10 rounded-xl">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div className="space-y-1">
            <h3 className="font-medium text-lg">{title}</h3>
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DashboardCard;
