type Props = {
    searches: string[]
};

export default function RecentSearches({searches}: Props) {
    return (
        <div>
            <h3>Recent Searches</h3>

            {searches.map(searches => (
                <p key={searches}>
                    {searches}
                </p>
            ))}
        </div>
    )
}