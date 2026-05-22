import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/culture", label: "Cultural Knowledge" },
    { path: "/activities", label: "Activity Experience" },
    { path: "/shop", label: "Shop" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold text-primary">TCM Medimate</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <MobileNav links={navLinks} currentPath={location.pathname} />
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-border bg-card py-8">
        <div className="container text-center">
          <p className="font-serif text-lg text-primary mb-2">TCM Medimate</p>
          <p className="text-sm text-muted-foreground">
            Promoting Traditional Chinese Medicine Culture Worldwide
          </p>
          <p className="text-xs text-muted-foreground mt-4">
            © 2025 TCM Medimate. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

const MobileNav = ({ links, currentPath }: { links: { path: string; label: string }[]; currentPath: string }) => {
  return (
    <div className="md:hidden">
      <details className="relative">
        <summary className="list-none cursor-pointer p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12"/>
            <line x1="4" x2="20" y1="6" y2="6"/>
            <line x1="4" x2="20" y1="18" y2="18"/>
          </svg>
        </summary>
        <div className="absolute right-0 top-full mt-2 w-48 rounded-lg border border-border bg-card shadow-lg">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "block px-4 py-2 text-sm transition-colors hover:bg-accent",
                currentPath === link.path
                  ? "text-primary bg-accent/50"
                  : "text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </details>
    </div>
  );
};

export default Layout;
