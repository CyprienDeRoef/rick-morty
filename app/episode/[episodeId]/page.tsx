import React from 'react';
import { Character, Episode } from "@/lib/types";
import getSpecificEpisode from "@/lib/data/episode/getSpecificEpisode";
import GlobalBreadcrumb from '@/components/GlobalBreadcrumb';
import * as icons from 'lucide-react';
import Link from 'next/link';
import getSeveralCharacters from '@/lib/data/character/getSeveralCharacters';
import DummyText from '@/components/DummyText';

export default async function Page({
    params
}: {
    params: {
        episodeId: string;
    };
}): Promise<React.JSX.Element> {
    const episode: Episode = await getSpecificEpisode(params.episodeId);
    const charactersIds: string[] | string = episode.characters.map((character: string): string | undefined => character.split('/').pop()) as string[] | string;
    const characters: Character[] | Character = await getSeveralCharacters(charactersIds);

    return (
        <>
            <GlobalBreadcrumb path={ episode.episode + ' ' + episode.name } ellipsis />
            <div className="space-y-6">
                <icons.Play className="text-primary size-80 mx-auto" />
                <h1 className="text-3xl font-bold">{ episode.name }</h1>
                <div className="[&>p]:flex [&>p]:gap-2 [&>p]:items-center">
                    <p>
                        <strong>Air Date:</strong>
                        { episode.air_date }
                        <icons.Calendar className="text-primary" />
                    </p>
                    <p>
                        <strong>Episode:</strong>
                        { episode.episode }
                        <icons.Video className="text-primary" />
                    </p>
                    <div className="flex flex-wrap">
                        <strong>Characters:</strong>
                        { Array.isArray(characters) ?
                            characters.map((resident: Character, index: number) => (
                                <Link key={ index } href={ `/character/${resident.id}` }>
                                    &nbsp;{ resident.name }{ index < characters.length - 1 ? ',' : '' }
                                </Link>
                            ))
                            :
                            <span className="text-muted-foreground">No residents found</span>
                        }
                        <icons.Users className="text-primary ms-2" />
                    </div>
                </div>
                <DummyText />
            </div >
        </>
    );
}