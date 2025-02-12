
import { useLocation } from "react-router-dom";
import Navbar from "@/components/navigation/Navbar";

const PlaceholderPage = () => {
  const location = useLocation();
  const path = location.pathname.split("/").pop();
  const title = path?.charAt(0).toUpperCase() + path?.slice(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      <Navbar />
      <main className="container py-8 animate-fade-up">
        <div className="glass-card p-8 text-center">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <p className="text-muted-foreground">
            This page is under construction. Check back soon for updates!
          </p>
        </div>
      </main>
    </div>
  );
};

export default PlaceholderPage;
