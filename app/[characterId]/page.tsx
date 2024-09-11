import React from 'react';

export default async function Page({
    params
}: {
    params: {
        characterId: string;
    };
}): Promise<React.JSX.Element> {
    return (
        <div className='container'>
            <h1>Character Page</h1>
            <p>Character ID: { params.characterId }</p>
        </div>
    );
}