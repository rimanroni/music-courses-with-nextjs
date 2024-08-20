"use client"
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";


const Navbar = ({ className }: { className?: string }) => {

    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed px-8 lg:px-0 top-10 inset-x-0 max-w-2xl mx-auto  bg-black rounded-full z-50", className)}>
            <Menu setActive={setActive} >
                {/* Link one */}
                <Link href={"/"}>
                Home
                </Link>
                {/* Link Two */}
                 <MenuItem setActive={setActive} active={active} item="Our Courses">
                    <div className="flex flex-col gap-4">
                        <HoveredLink href="/courses">All Corses</HoveredLink>
                        <HoveredLink href="/courses"> Basic Music Theory</HoveredLink>
                        <HoveredLink href="/courses"> Advanced Composition</HoveredLink>
                        <HoveredLink href="/courses">Songwriting
                        </HoveredLink>
                        <HoveredLink href="/courses"> Music Production</HoveredLink>
                    </div>
                </MenuItem>
                {/* Link 3 */}
                <Link href={'/contact'}>
                  Contact
                </Link>


            </Menu>
        </div>
    );
};

export default Navbar;
