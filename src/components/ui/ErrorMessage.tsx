type Props = {
    message: string;
}

export default function ErrorMessage({ message}: Props) {
    return (
        <div className="status-card error-card">
            <p>{message}</p>
        </div>
    )
}
