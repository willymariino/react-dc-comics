function ComicsCard({ title, image }) {
    return (
        <div className="card">
            <img src={image} className="card-image" alt={title} />
            <h3 className="comic-title">{title}</h3>
        </div>
    )
}

export default ComicsCard