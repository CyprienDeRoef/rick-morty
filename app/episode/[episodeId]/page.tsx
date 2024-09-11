import React from 'react';
import { Episode } from "@/lib/types";
import getSpecificEpisode from "@/lib/data/getSpecificEpisode";
import GlobalBreadcrumb from '@/components/GlobalBreadcrumb';

export default async function Page({
    params
}: {
    params: {
        episodeId: string;
    };
}): Promise<React.JSX.Element> {
    const episode: Episode = await getSpecificEpisode(params.episodeId);

    return (
        <>
            <GlobalBreadcrumb path={ episode.name } ellipsis />
            <div className="space-y-6">
                <h1 className="text-3xl font-bold">{ episode.name }</h1>
                <div>
                    <p><strong>Air Date:</strong> { episode.air_date }</p>
                    <p><strong>Episode:</strong> { episode.episode }</p>
                    <p><strong>Characters:</strong>
                        <ul>
                            { episode.characters.map((character: string, index: number) => (
                                <li key={ index }>
                                    { character }
                                </li>
                            )) }
                        </ul>
                    </p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iusto non a odio minima. Rem, provident fugiat blanditiis recusandae veniam omnis magni quaerat sed reprehenderit officiis, nihil earum, ducimus enim.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cupiditate sed ad doloremque laborum temporibus optio fuga quas quis aut expedita dicta error, sit suscipit, beatae, reprehenderit ipsa architecto repellendus. Temporibus ea saepe voluptatibus magni inventore cum at iure numquam veritatis, quam ipsa quae neque? Provident officia ipsam minus reprehenderit totam cupiditate, deserunt magnam, tempore culpa eaque aliquid voluptate fuga?</p>
                <p>Similique dolorem aspernatur necessitatibus unde in tenetur dignissimos velit harum labore excepturi sed debitis corporis nisi autem, quo voluptatibus adipisci ea! Iure commodi consequuntur, laborum similique qui a quas sunt!
                </p>
            </div>
        </>
    );
}