"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Character } from "@/lib/types";

interface CharacterCardProps {
    character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps): React.JSX.Element {
    return (
        <Card className="w-full justify-between flex flex-col">
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
                    <Link href={ `/character/${character.id}` }>
                        See more details
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
