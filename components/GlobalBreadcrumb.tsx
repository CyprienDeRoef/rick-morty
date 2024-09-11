"use client";

import React from 'react';
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";


interface GlobalBreadcrumbProps {
    path?: string;
    ellipsis?: boolean;
}

export default function GlobalBreadcrumb({ path, ellipsis }: GlobalBreadcrumbProps): React.JSX.Element {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">
                        Characters List
                    </BreadcrumbLink>
                </BreadcrumbItem>
                { ellipsis &&
                    <>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbEllipsis />
                        </BreadcrumbItem>
                    </>
                }
                { path &&
                    <>
                        <BreadcrumbSeparator />
                        <BreadcrumbPage>
                            { path }
                        </BreadcrumbPage>
                    </>
                }
            </BreadcrumbList>
        </Breadcrumb>
    );
}
