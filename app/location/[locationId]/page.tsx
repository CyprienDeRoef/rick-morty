import React from 'react';
import { Character, Location } from "@/lib/types";
import { getLocation } from "@/lib/data";
import GlobalBreadcrumb from '@/components/GlobalBreadcrumb';
import Link from 'next/link';
import * as icons from "lucide-react";
import DummyText from '@/components/DummyText';
import { getSeveralCharacters } from '@/lib/data';

export default async function Page({
    params
}: {
    params: {
        locationId: string;
    };
}): Promise<React.JSX.Element> {
    const location: Location = await getLocation(params.locationId);
    const residentsIds: string[] = location.residents.map((resident: string): string | undefined => resident.split('/').pop()) as string[];
    const residents: Character[] | Character = await getSeveralCharacters(residentsIds);

    return (
        <>
            <GlobalBreadcrumb path={ location.name } ellipsis />
            <div className="space-y-6">
                { location.type === "Planet" ? (
                    <icons.Globe className="text-primary size-80 mx-auto" />
                ) : location.type === "Space station" ? (
                    <icons.Dock className="text-primary size-80 mx-auto" />
                ) : location.type === "Microverse" ? (
                    <icons.Cpu className="text-primary size-80 mx-auto" />
                ) : (
                    <icons.HelpCircle className="text-primary size-80 mx-auto" />
                )
                }
                <h1 className="text-xl font-medium">{ location.name }</h1>
                <div className="[&>p]:flex [&>p]:gap-2 [&>p]:items-center">
                    <p>
                        <strong>Type:</strong>
                        { location.type }
                        { location.type === "Planet" ? (
                            <icons.Globe className="text-primary" />
                        ) : location.type === "Space station" ? (
                            <icons.Dock className="text-primary" />
                        ) : location.type === "Microverse" ? (
                            <icons.Cpu className="text-primary" />
                        ) : (
                            <icons.HelpCircle className="text-primary" />
                        ) }
                    </p>
                    <p>
                        <strong>Dimension:</strong>
                        { location.dimension }
                        { location.dimension === "unknown" ? (
                            <icons.HelpCircle className="text-primary" />
                        ) : (
                            <icons.Box className="text-primary" />
                        ) }
                    </p>
                    <div className="flex flex-wrap">
                        <strong>Residents:&nbsp;</strong>
                        { Array.isArray(residents) ?
                            residents.map((resident: Character, index: number) => (
                                <Link key={ index } href={ `/character/${resident.id}` }>
                                    &nbsp;{ resident.name }{ index < residents.length - 1 ? ',' : '' }
                                </Link>
                            ))
                            :
                            <span className="text-muted-foreground">No residents found</span>
                        }&nbsp;
                        <icons.Users className="text-primary" />
                    </div>
                </div>
                <DummyText />
            </div>
        </>
    );
}