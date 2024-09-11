import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';
export default function Loading(): React.JSX.Element {
    return (
        <>
            <Skeleton className="w-60 h-6" />
            <div className="space-y-6">
                <Skeleton className="w-full h-full max-h-[450px] max-w-[800px] mx-auto" />
                <Skeleton className="w-60 h-12" />
                <div className="space-y-2">
                    <Skeleton className="w-40 h-6" />
                    <Skeleton className="w-40 h-6" />
                    <Skeleton className="w-40 h-6" />
                    <Skeleton className="w-full h-24" />
                </div>
                <Skeleton className="h-80 w-full" />
            </div>
        </>
    );
};