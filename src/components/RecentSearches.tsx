type Props = {
    searches: string[]
};

export default function RecentSearches({searches}: Props) {
    return (
        <div className="mini-panel">
            <h3>Recent Searches</h3>

            {searches.length === 0 && <p className="muted-text">Searches will land here</p>}

            <div className="chip-list">
            {searches.map(searches => (
                <p className="city-chip" key={searches}>
                    {searches}
                </p>
            ))}
            </div>
        </div>
    )
}
