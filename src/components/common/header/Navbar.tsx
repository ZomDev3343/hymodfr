import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export function Navbar() {
  return (
    <nav className="w-full border-b bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          Gameloc
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link to="/play">Jouer</Link>
          </Button>

          <Button variant="ghost" asChild>
            <Link to="/maps">Maps</Link>
          </Button>

          <Button asChild>
            <Link to="/login">Connexion</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
