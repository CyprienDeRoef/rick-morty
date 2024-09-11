"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Character } from "@/lib/types";
import * as icons from "lucide-react";

interface CharacterCardProps {
    character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps): React.JSX.Element {
    return (
        <Card className="w-full flex flex-col justify-between transition hover:scale-[1.03]">
            <CardHeader className="text-center">
                <Image src={ character.image } alt={ character.name } width={ 900 } height={ 900 } className="rounded-md" />
                <CardTitle>
                    <Link href={ `/character/${character.id}` }>
                        { character.name }
                    </Link>
                </CardTitle>
                <CardDescription>{ character.species }</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="flex gap-2">Status: { character.status } { character.status === "Alive" ? <icons.Heart className="text-green-500" /> : character.status === "Dead" ? <icons.X className="text-primary" /> : <icons.HelpCircle className="text-gray-500" /> }</p>
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
