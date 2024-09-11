"use client";

import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";
import { PaginationInfo, Character, Paging } from "@/lib/types";
import * as icons from "lucide-react";
import getCharacters from "@/lib/data/character/getAllCharacters";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import CharacterCard from '@/components/CharacterCard';
import { Skeleton } from '@/components/ui/skeleton';

export default function CharacterList(): React.ReactNode {
    const [actualPage, setActualPage] = useState<number>(1);
    const [paginationInfo, setPaginationInfo] = useState<PaginationInfo>({ count: 0, pages: 0, next: "", prev: "" });

    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const [searchInput, setSearchInput] = useState<string>("");
    const [name, setName] = useState<string>("");

    const [status, setStatus] = useState<"Alive" | "Dead" | "">("");
    const [alive, setAlive] = useState<boolean>(false);
    const [dead, setDead] = useState<boolean>(false);

    useEffect((): void => {
        async function fetchCharacters(): Promise<void> {
            try {
                setLoading(true);
                const { info, results }: Paging<Character> = await getCharacters(actualPage, status, name);
                setPaginationInfo(info);
                setCharacters(results);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }

        fetchCharacters();
    }, [actualPage, status, name]);

    useEffect((): void => {
        if (alive && dead) {
            setStatus("");
        } else if (alive) {
            setStatus("Alive");
        } else if (dead) {
            setStatus("Dead");
        } else {
            setStatus("");
        }
    }, [alive, dead]);

    return (
        <>
            <div className="flex gap-4 justify-between [&>*]:flex [&>*]:gap-2">
                <div>
                    <Toggle variant="outline" onClick={ (): void => {
                        setAlive(!alive);
                        setActualPage(1);
                    } }>Alive</Toggle>
                    <Toggle variant="outline" onClick={ (): void => {
                        setDead(!dead);
                        setActualPage(1);
                    } }>Dead</Toggle>
                </div>
                <div>
                    <Button variant="outline" onClick={ (): void => {
                        setActualPage(1);
                        setName(searchInput);
                    } }>
                        <icons.SearchIcon className="h-4 w-4" />
                    </Button>
                    <Input placeholder="Search" onChange={ (e: React.ChangeEvent<HTMLInputElement>): void => setSearchInput(e.target.value) } />
                </div>
            </div >
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                { loading ?
                    Array.from({ length: 20 }, (_: unknown, index: number): React.JSX.Element => (
                        <Skeleton key={ index } className="h-80" />
                    ))
                    :
                    characters.map((character: Character, index: number): React.JSX.Element => (
                        <CharacterCard key={ index } character={ character } />
                    )) }
            </div>
            <Pagination className="gap-2">
                <PaginationPrevious onClick={ (): void => setActualPage(actualPage - 1) } className="cursor-pointer" />
                <PaginationContent>
                    { Array.from({ length: paginationInfo.pages }, (_: unknown, index: number): number => index + 1).map((page: number): false | React.JSX.Element => {
                        const isDisplayed: boolean = page === 1 || page === actualPage || page === paginationInfo.pages || (page >= actualPage - 1 && page <= actualPage + 1);
                        const isFirstEllipsis: boolean = page === actualPage - 1 && actualPage >= 4;
                        const isLastEllipsis: boolean = page === actualPage + 1 && actualPage <= paginationInfo.pages - 3;
                        return isDisplayed && (
                            <>
                                { isFirstEllipsis && <PaginationEllipsis /> }
                                <PaginationItem className="cursor-pointer">
                                    <PaginationLink onClick={ (): void => setActualPage(page) } isActive={ page === actualPage }>
                                        { page }
                                    </PaginationLink>
                                </PaginationItem>
                                { isLastEllipsis && <PaginationEllipsis /> }
                            </>
                        );
                    }) }
                </PaginationContent>
                <PaginationNext onClick={ (): void => setActualPage(actualPage + 1) } className="cursor-pointer" />
            </Pagination>
        </>
    );
}
