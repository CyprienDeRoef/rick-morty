"use client";

import React from 'react';
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";


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
                        <BreadcrumbLink href={ `/${path}` }>
                            { path }
                        </BreadcrumbLink>
                    </>
                }
            </BreadcrumbList>
        </Breadcrumb>
    );
}
