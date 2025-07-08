import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Construction,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", disabled: false },
    { name: "About", path: "/about", disabled: false },
    { name: "Blog", path: "/blog", disabled: false },
    {name:"Gallery",path:"/gallery",disabled:false},
    { name: "Contact", path: "/contact", disabled: false },
  ];

  const CuttingServices = ["Core Cutting Service", "Rebaring service"];

  const rebaringServices = [];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Marquee Section */}
      <div className="bg-gradient-to-r from-[#8A0707] via-[#C80F0F] to-[#FF2E2E] text-white text-primary-foreground py-2 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span className="text-sm font-medium">
              +91 7289938603, 9136238205
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4" />
            <span className="text-sm font-medium">
              Anantkumaryadav612@gmail.com
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">
              D-90 Sector-48 Noida U.P 201031
            </span>
          </div>
          {/* Repeat for continuous effect */}
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span className="text-sm font-medium">
              +91 7289938603, 9136238205
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4" />
            <span className="text-sm font-medium">
              Anantkumaryadav612@gmail.com
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">
              D-90 Sector-48 Noida U.P 201031
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="fixed top-8 w-full bg-white text-black backdrop-blur-lg border-b border-border/50 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="p-3 from-primary to-secondary rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"></div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-2xl  from-primary to-secondary bg-clip-text text-transparent">
                  <img
                    src="./images/c.png"
                    alt=""
                    width="120px"
                    height="100px"
                  />
                </span>
                
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) =>
                item.disabled ? (
                  <span
                    key={item.name}
                    className={cn(
                      "relative px-4 py-2 text-sm font-semibold rounded-lg text-foreground cursor-not-allowed",
                      "hover:text-foreground hover:bg-transparent text-black"
                    )}
                    title="Coming soon"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={cn(
                      "relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:bg-primary/10",
                      isActive(item.path)
                        ? "text-primary after:scale-x-100 bg-primary/10"
                        : "text-foreground hover:text-primary text-black"
                    )}
                  >
                    {item.name}
                  </Link>
                )
              )}

              {/* Services Dropdown */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={cn(
                        "relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:bg-primary/10 bg-transparent text-black",
                        isActive("/services")
                          ? "text-primary after:scale-x-100 bg-primary/10"
                          : "text-foreground hover:text-primary text-black"
                      )}
                    >
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[600px] grid-cols-2 gap-3 p-6 bg-popover">
                        {/* Core Cutting Services */}
                        <div className="space-y-3">
                          {/* <h4 className="font-heading font-semibold text-lg text-primary border-b border-primary/20 pb-2">
                            Core Cutting Service
                          </h4> */}
                          <ul className="space-y-2">
                            {CuttingServices.map((service) => (
                              <li key={service}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    to="/services"
                                    className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="font-medium">{service}</div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Rebaring Services */}
                        <div className="space-y-3">
                          {/*<h4 className="font-heading font-semibold text-lg text-secondary border-b border-secondary/20 pb-2">
                            Rebaring Service
                          </h4>*/}
                          <ul className="space-y-2">
                            {rebaringServices.map((service) => (
                              <li key={service}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    to="/services2"
                                    className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="font-medium">{service}</div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {/* Smaller Get Quote Button */}
              <Link
                to="/contact"
                className="relative ml-4 bg-gradient-to-r from-[#8A0707] via-[#C80F0F] to-[#FF2E2E] text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-md hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 hover:scale-105 border border-red-700 overflow-hidden group"
              >
                <span className="relative z-10">Get Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF2E2E] via-[#C80F0F] to-[#8A0707] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 rounded-xl hover:bg-muted transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-6 border-t border-border/50 bg-background/95 backdrop-blur-lg">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "px-4 py-3 text-sm font-semibold rounded-lg transition-colors",
                      isActive(item.path)
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:text-primary hover:bg-primary/5"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile Services */}
                <div className="px-4 py-3">
                  <div className="text-sm font-semibold text-primary mb-2">
                    Services
                  </div>
                  <div className="ml-4 space-y-2">
                    <div className="text-xs font-medium text-muted-foreground mb-1">
                      Core Cutting Service
                    </div>
                    {CuttingServices.slice(0, 4).map((service) => (
                      <Link
                        key={service}
                        to="/services"
                        onClick={() => setIsOpen(false)}
                        className="block text-xs text-foreground hover:text-primary py-1"
                      >
                        {service}
                      </Link>
                    ))}
                    <div className="text-xs font-medium text-muted-foreground mb-1 mt-3">
                      Rebaring Service
                    </div>
                    {rebaringServices.slice(0, 3).map((service) => (
                      <Link
                        key={service}
                        to="/services"
                        onClick={() => setIsOpen(false)}
                        className="block text-xs text-foreground hover:text-primary py-1"
                      >
                        {service}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mx-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-3 rounded-xl font-bold text-sm text-center shadow-lg"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
