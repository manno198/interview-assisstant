
import { LucideIcon } from "lucide-react";

interface RoleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
}

const RoleCard = ({ title, description, icon: Icon, onClick }: RoleCardProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full glass-card card-hover p-8 text-left"
    >
      <div className="space-y-4">
        <div className="p-3 bg-primary/10 inline-block rounded-xl">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-medium">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </button>
  );
};

export default RoleCard;
