"use client";

import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";
import { PaginationInfo, Character, Paging } from "@/lib/types";
import * as icons from "lucide-react";
import getCharacters from "@/lib/data/getCharacters";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";

export default function CharacterList(): React.ReactNode {
    const [actualPage, setActualPage] = useState<number>(1);
    const [paginationInfo, setPaginationInfo] = useState<PaginationInfo>({ count: 0, pages: 0, next: "", prev: "" });
    const [characters, setCharacters] = useState<Character[]>([]);
    const [status, setStatus] = useState<"Alive" | "Dead" | "">("");
    const [searchInput, setSearchInput] = useState<string>("");
    const [name, setName] = useState<string>("");

    useEffect((): void => {
        async function fetchCharacters(): Promise<void> {
            try {
                const { info, results }: Paging<Character> = await getCharacters(actualPage, status, name);
                setPaginationInfo(info);
                setCharacters(results);
            } catch (error) {
                console.error(error);
            }
        }

        fetchCharacters();
    }, [actualPage, status, name]);

    return (
        <>
            <div className="flex gap-4 justify-between [&>*]:flex [&>*]:gap-2">
                <div>
                    <Toggle variant="outline" onClick={ (): void => setStatus("Alive") }>Alive</Toggle>
                    <Toggle variant="outline" onClick={ (): void => setStatus("Dead") }>Dead</Toggle>
                </div>
                <div>
                    <Button variant="outline" onClick={ () => setName(searchInput) }>
                        <icons.SearchIcon className="h-4 w-4" />
                    </Button>
                    <Input placeholder="Search" onChange={ (e) => setSearchInput(e.target.value) } />
                </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                { characters.map((character: Character, index: number) => (
                    <Card key={ index } className="w-full justify-between flex flex-col">
                        <CardHeader className="text-center">
                            <Image src={ character.image } alt={ character.name } width={ 900 } height={ 900 } className="rounded-md" />
                            <CardTitle>{ character.name }</CardTitle>
                            <CardDescription>{ character.species }</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Status: { character.status }</p>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" asChild>
                                <Link href={ `/${character.id}` }>
                                    See more details
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                )) }
            </div>
            <Pagination className="gap-2">
                <PaginationPrevious onClick={ () => setActualPage(actualPage - 1) } />
                <PaginationContent>
                    { Array.from({ length: paginationInfo.pages }, (_, index) => index + 1).map((page: number) => {
                        const isDisplayed: boolean = page === 1 || page === actualPage || page === paginationInfo.pages || (page >= actualPage - 1 && page <= actualPage + 1);
                        const isFirstEllipsis: boolean = page === actualPage - 1 && actualPage > 4;
                        const isLastEllipsis: boolean = page === actualPage + 1 && actualPage < paginationInfo.pages - 3;
                        return isDisplayed && (
                            <>
                                { isFirstEllipsis && <PaginationEllipsis /> }
                                <PaginationItem>
                                    <PaginationLink onClick={ () => setActualPage(page) } isActive={ page === actualPage }>
                                        { page }
                                    </PaginationLink>
                                </PaginationItem>
                                { isLastEllipsis && <PaginationEllipsis /> }
                            </>
                        );
                    }) }
                </PaginationContent>
                <PaginationNext onClick={ () => setActualPage(actualPage + 1) } />
            </Pagination>
        </>
    );
}
