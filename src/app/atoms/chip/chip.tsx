export default function Chip({ text }: { text: string }) {
    return (
        <span className="bg-green-200 text-black rounded-sm p-0.5">
            ${text}
        </span>
    );
}