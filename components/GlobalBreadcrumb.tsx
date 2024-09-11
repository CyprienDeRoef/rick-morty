"use client";

import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { usePathname } from 'next/navigation';

export function GlobalBreadcrumb() {
    const paths: string = usePathname() || '';

    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink>
                        Characters List
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
            </BreadcrumbList>
        </Breadcrumb>
    );
}
