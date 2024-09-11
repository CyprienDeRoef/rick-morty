import React from 'react';
import { Location } from "@/lib/types";
import getSpecificLocation from "@/lib/data/getSpecificLocation";
import GlobalBreadcrumb from '@/components/GlobalBreadcrumb';
import Link from 'next/link';

export default async function Page({
    params
}: {
    params: {
        locationId: string;
    };
}): Promise<React.JSX.Element> {
    const location: Location = await getSpecificLocation(params.locationId);

    return (
        <>
            <GlobalBreadcrumb path={ location.name } ellipsis />
            <div className="space-y-6">
                <h1 className="text-xl font-medium">{ location.name }</h1>
                <div>
                    <p><strong>Type:</strong> { location.type }</p>
                    <p><strong>Dimension:</strong> { location.dimension }</p>
                    <p><strong>Residents:</strong>
                        <ul>
                            { location.residents.map((resident: string, index: number) => (
                                <li key={ index }>
                                    <Link href={ `/character/${resident.split('/').pop()}` } >
                                        { resident }
                                    </Link>
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