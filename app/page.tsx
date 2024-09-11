import CharacterList from "@/components/CharacterList";

export default async function Home(): Promise<React.ReactNode> {
    return (
        <>
            <CharacterList />
        </>
    );
}
