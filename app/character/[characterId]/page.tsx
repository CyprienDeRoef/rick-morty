/* eslint-disable */
import React from 'react';
import { Character, Episode } from "@/lib/types";
import getSpecificCharacter from "@/lib/data/character/getSpecificCharacter";
import Image from "next/image";
import Link from 'next/link';
import GlobalBreadcrumb from '@/components/GlobalBreadcrumb';
import getSeveralEpisodes from '@/lib/data/episode/getSeveralEpisodes';
import * as icons from "lucide-react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import DummyText from '@/components/DummyText';

export default async function Page({
    params
}: {
    params: {
        characterId: string;
    };
}): Promise<React.JSX.Element> {
    const character: Character = await getSpecificCharacter(params.characterId);
    const episodesIds: string[] = character.episode.map((episode: string): string | undefined => episode.split('/').pop()) as string[];
    const episodes: Episode[] = await getSeveralEpisodes(episodesIds);

    return (
        <>
            <GlobalBreadcrumb path={ character.name } />
            <div className="space-y-6">
                <AlertDialog>
                    <AlertDialogTrigger className="mx-auto" asChild>
                        <Image src={ character.image } alt={ character.name } width={ 680 } height={ 400 } className="rounded-lg object-cover mx-auto max-h-[450px] max-w-[800px] transition hover:scale-[1.02] cursor-pointer" />
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogDescription>
                                <Image src={ character.image } alt={ character.name } width={ 900 } height={ 900 } className="rounded-md" />
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogAction>Close</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
                <h1 className="text-3xl font-medium">{ character.name }</h1>
                <div className="[&>p]:flex">
                    <p>
                        <strong>Status:</strong>
                        &nbsp;{ character.status }&nbsp;
                        { character.status === "Alive" ? (
                            <icons.Heart className="text-green-500" />
                        ) : character.status === "Dead" ? (
                            <icons.X className="text-primary" />
                        ) : (
                            <icons.LucideFileQuestion className="text-primary" />
                        ) }
                    </p>
                    <p>
                        <strong>Species:</strong>
                        &nbsp;{ character.species }&nbsp;
                        { character.species === "Human" || character.species === "Humanoid" ? (
                            <icons.User className="text-primary" />
                        ) : character.species === "Alien" ? (
                            <icons.Globe className="text-primary" />
                        ) : character.species === "Robot" ? (
                            <icons.Cpu className="text-primary" />
                        ) : (
                            <icons.LucideFileQuestion className="text-primary" />
                        ) }
                    </p>
                    <p>
                        <strong>Type or subspecies:</strong>
                        &nbsp;{ character.type ? character.type : <span className="text-muted-foreground">No type found</span> }&nbsp;
                        { character.type &&
                            <icons.PawPrint className="text-primary" />
                        }
                    </p>
                    <p>
                        <strong>Origin:</strong>
                        { character.origin.name !== "unknown" ?
                            <Link href={ `/location/${character.origin.url.split("/").pop()}` } className="flex">
                                &nbsp;{ character.origin.name }&nbsp;
                            </Link>
                            :
                            <span className="text-muted-foreground">&nbsp;{ character.origin.name }&nbsp;</span>
                        }
                        { character.origin.name === "Earth (C-137)" ? (
                            <icons.Globe className="text-primary" />
                        ) : character.origin.name === "unknown" ? (
                            <icons.LucideFileQuestion className="text-primary" />
                        ) : (
                            <icons.MapPin className="text-primary" />
                        ) }
                    </p>
                    <p>
                        <strong>Location:</strong>
                        <Link href={ `/location/${character.location.url.split("/").pop()}` } className="flex">
                            &nbsp;{ character.location.name }&nbsp;
                        </Link>
                        { character.location.name === "Earth (Replacement Dimension)" ? (
                            <icons.Globe className="text-primary" />
                        ) : character.location.name === "unknown" ? (
                            <icons.LucideFileQuestion className="text-primary" />
                        ) : (
                            <icons.MapPin className="text-primary" />
                        ) }
                    </p>
                    <p className="flex flex-wrap">
                        <strong>Episodes:&nbsp;</strong>
                        { Array.isArray(episodes) ?
                            episodes.map((episode: Episode, index: number) => (
                                <Link key={ index } href={ `/episode/${episode.id}` }>
                                    &nbsp;{ episode.episode } { episode.name }{ index < episodes.length - 1 ? ',' : '' }&nbsp;
                                </Link>
                            ))
                            :
                            <Link href={ `/episode/${episodes.id}` }>
                                { episodes.episode } { episodes.name }
                            </Link>
                        }&nbsp;
                        <icons.Video className="text-primary" />
                    </p>
                </div>
                <DummyText />
            </div>
        </>
    );
}