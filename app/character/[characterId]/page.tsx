import React from 'react';
import { Character } from "@/lib/types";
import getSpecificCharacter from "@/lib/data/getSpecificCharacter";
import Image from "next/image";
import Link from 'next/link';
import GlobalBreadcrumb from '@/components/GlobalBreadcrumb';

export default async function Page({
    params
}: {
    params: {
        characterId: string;
    };
}): Promise<React.JSX.Element> {
    const character: Character = await getSpecificCharacter(params.characterId);

    return (
        <>
            <GlobalBreadcrumb path={ character.name } />
            <div className="space-y-6">
                <Image src={ character.image } alt={ character.name } width={ 680 } height={ 400 } className="rounded-lg object-fit mx-auto max-h-[400px] max-w-[640px]" />
                <h1 className="text-xl font-medium">{ character.name }</h1>
                <div>
                    <p><strong>Status:</strong> { character.status }</p>
                    <p><strong>Species:</strong> { character.species }</p>
                    <p><strong>Type of character:</strong> { character.type }</p>
                    <p><strong>Origin :</strong> <Link href={ `/location/${character.origin.url.split("/").pop()}` }>{ character.origin.name }</Link></p>
                    <p><strong>Location :</strong> <Link href={ `/location/${character.location.url.split("/").pop()}` }>{ character.location.name }</Link></p>
                    <strong>Episodes :</strong>
                    <ul>
                        { character.episode.map((episode: string, index: number) => (
                            <li key={ index }>
                                <Link href={ `/episode/${episode.split('/').pop()}` } >
                                    { episode }
                                </Link>
                            </li>
                        )) }
                    </ul>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iusto non a odio minima. Rem, provident fugiat blanditiis recusandae veniam omnis magni quaerat sed reprehenderit officiis, nihil earum, ducimus enim.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cupiditate sed ad doloremque laborum temporibus optio fuga quas quis aut expedita dicta error, sit suscipit, beatae, reprehenderit ipsa architecto repellendus. Temporibus ea saepe voluptatibus magni inventore cum at iure numquam veritatis, quam ipsa quae neque? Provident officia ipsam minus reprehenderit totam cupiditate, deserunt magnam, tempore culpa eaque aliquid voluptate fuga?</p>
                <p>Similique dolorem aspernatur necessitatibus unde in tenetur dignissimos velit harum labore excepturi sed debitis corporis nisi autem, quo voluptatibus adipisci ea! Iure commodi consequuntur, laborum similique qui a quas sunt!
                </p>
            </div>
        </>
    );
}