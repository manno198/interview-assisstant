
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
      className="w-full glass-card card-hover p-8 text-left bg-gradient-to-br from-white/[0.08] to-transparent"
    >
      <div className="space-y-4">
        <div className="icon-container inline-block">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-white/70 leading-relaxed">{description}</p>
        </div>
      </div>
    </button>
  );
};

export default RoleCard;
