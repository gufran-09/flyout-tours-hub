import * as React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
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
    leftTitle?: string;
    rightTitle?: string;
    type?: "list" | "grid";
    columns?: number;
    showDivider?: boolean;
}

export function MegaMenu({
    triggerLabel,
    items,
    leftTitle = "Discover",
    rightTitle = "Explore",
    type = "list",
    columns = 4,
    showDivider = true,
}: MegaMenuProps) {
    const isGrid = type === "grid";
    const mid = Math.ceil(items.length / 2);
    const left = items.slice(0, mid);
    const right = items.slice(mid);

    // Width calculation
    const widthClass = isGrid
        ? "w-[1100px]"
        : "w-[760px]";

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
                                "relative px-6 pb-6 pt-0 rounded-3xl bg-white shadow-xl border border-gray-100",
                                widthClass
                            )}
                        >
                            {/* Glass glow */}
                            {/* Subtly removed Glass glow for cleaner white look */}
                            {/* <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent" /> */}

                            {/* Divider - Only show in list mode if requested */}
                            {/* Divider - Disabled globally as per request */}
                            {/* {!isGrid && showDivider && (
                                <div className="absolute top-6 bottom-6 left-1/2 w-px bg-gray-200" />
                            )} */}

                            {isGrid ? (
                                <div className="grid gap-4 p-2" style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}>
                                    {items.map(item => <MenuRow key={item.title} item={item} isGrid={true} />)}
                                </div>
                            ) : (
                                <div className="relative grid grid-cols-2 gap-x-12">
                                    {/* LEFT COLUMN */}
                                    <div className="space-y-3">
                                        <p className="text-xs uppercase tracking-widest text-white/50 mb-3">
                                            {leftTitle}
                                        </p>

                                        {left.map((item) => (
                                            <MenuRow key={item.title} item={item} />
                                        ))}
                                    </div>

                                    {/* RIGHT COLUMN */}
                                    <div className="space-y-3">
                                        <p className="text-xs uppercase tracking-widest text-white/50 mb-3">
                                            {rightTitle}
                                        </p>

                                        {right.map((item) => (
                                            <MenuRow key={item.title} item={item} />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

/* ----------------------------- */
/* 🔹 Single Row Component */
/* ----------------------------- */

function MenuRow({ item, isGrid }: { item: MenuItem, isGrid?: boolean }) {
    if (isGrid) {
        return (
            <Link to={item.href} className="group flex items-center gap-4 p-2 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                {/* Image */}
                <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-gray-100 border border-gray-100 shadow-sm">
                    {item.image ? (
                        <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    ) : (
                        // Fallback icon
                        <div className="flex h-full w-full items-center justify-center text-primary group-hover:scale-110 transition-transform">
                            {item.icon && <item.icon className="h-5 w-5" />}
                        </div>
                    )}
                </div>
                {/* Title */}
                <span className="font-semibold text-gray-900 group-hover:text-primary transition-colors text-sm">{item.title}</span>
            </Link>
        )
    }

    return (
        <Link
            to={item.href}
            className="
        group flex items-start gap-4 rounded-xl px-4 py-3
        transition-all duration-300
        hover:bg-gray-100
      "
        >
            {(item.image || item.icon) && (
                <div
                    className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg overflow-hidden transition-transform group-hover:scale-110",
                        !item.image && "bg-primary/5 text-primary"
                    )}
                >
                    {item.image ? (
                        <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                    ) : (
                        item.icon && <item.icon className="h-5 w-5" />
                    )}
                </div>
            )}

            <div className="flex-1">
                <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors">
                        {item.title}
                    </p>

                    {item.badge && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-yellow-400/20 text-yellow-600 border border-yellow-400/30">
                            {item.badge}
                        </span>
                    )}
                </div>

                {item.description && (
                    <p className="text-xs text-gray-500 leading-snug mt-0.5">
                        {item.description}
                    </p>
                )}
            </div>
        </Link>
    );
}
