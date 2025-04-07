function ComicsCard({ title, image }) {
    return (
        <div className="card">
            <img src={image} className="card-image" alt={title} />
            <h2 className="comic-title">{title}</h2>
        </div>
    )
}

export default ComicsCard