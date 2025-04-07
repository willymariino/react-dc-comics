function ComicsCard({ title, thumb }) {
    return (
        <div className="card">
            <img src={thumb} alt={title} />
            <h2>{title}</h2>
        </div>
    )
}

export default ComicsCard