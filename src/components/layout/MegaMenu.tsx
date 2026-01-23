import * as React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { LucideIcon } from "lucide-react";

export interface MenuItem {
    title: string;
    href: string;
    icon?: LucideIcon | React.ComponentType<{ className?: string }>;
    description?: string;
    badge?: string;
    image?: string;
}

interface MegaMenuProps {
    triggerLabel: string;
    items: MenuItem[];
    type?: "grid" | "list" | "curated"; // grid = icons+text, list = simple list, curated = rich cards
    columns?: 2 | 3 | 4;
}

export function MegaMenu({ triggerLabel, items, type = "grid", columns = 3 }: MegaMenuProps) {
    return (
        <NavigationMenu delayDuration={0}>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-foreground/80 hover:text-primary data-[state=open]:bg-transparent data-[state=open]:text-primary h-auto py-2 px-3">
                        {triggerLabel}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div
                            className={cn(
                                "p-4 md:w-[400px] lg:w-[600px] bg-white/95 backdrop-blur-xl", // Premium surface
                                type === "grid" && `grid gap-3 grid-cols-2 lg:grid-cols-${columns}`,
                                type === "list" && "flex flex-col gap-1 w-[250px]",
                                type === "curated" && "grid grid-cols-2 gap-4 w-[500px]"
                            )}
                        >
                            {items.map((item) => (
                                <Link
                                    key={item.title}
                                    to={item.href}
                                    className={cn(
                                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group",
                                        type === "grid" && "h-full flex flex-col items-center justify-center text-center border border-transparent hover:border-slate-200/50 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300",
                                        type === "curated" && "relative overflow-hidden h-32 flex flex-col justify-end p-4 border border-slate-100 hover:shadow-md"
                                    )}
                                >
                                    {/* Curated Background (fake implementation until real images) */}
                                    {type === "curated" && (
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-0" />
                                    )}

                                    {/* Icon/Image Wrapper */}
                                    {item.icon && type !== "curated" && (
                                        <div className={cn(
                                            "mb-2 p-2 rounded-full bg-slate-50 group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-sm",
                                            type === "list" && "mb-0 mr-3 inline-block p-1"
                                        )}>
                                            <item.icon className={cn(
                                                "h-6 w-6 text-primary/80 group-hover:text-primary",
                                                type === "list" && "h-4 w-4"
                                            )} />
                                        </div>
                                    )}

                                    {/* Text Content */}
                                    <div className={cn("relative z-10", type === "list" && "flex items-center")}>
                                        <div className={cn(
                                            "text-sm font-medium leading-none group-hover:text-primary transition-colors",
                                            type === "curated" && "text-white text-lg font-bold"
                                        )}>
                                            {type === "list" && item.icon && <span className="inline-block mr-2"><item.icon className="h-4 w-4" /></span>}
                                            {item.title}
                                            {item.badge && (
                                                <span className="ml-2 px-1.5 py-0.5 text-[10px] rounded-full bg-yellow-400/20 text-yellow-600 border border-yellow-400/30">
                                                    {item.badge}
                                                </span>
                                            )}
                                        </div>
                                        {item.description && (
                                            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1 group-hover:text-foreground/80">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}
