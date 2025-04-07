import comicsCard from "./comicsCard";
import comics from "./comics";

function comicsCardList() {
    return (
        <div className="comic-grid">
            {comics.map((comic) => (
                <ComicsCard
                    key={comic.id}
                    title={comic.title}
                    image={comic.thumb}
                />

            ))}

        </div>

    )
}
export default comicsCardList