export default function Label({ text, id }: { text: string; id: string; }) {
    return (
        <label htmlFor={`checkbox-${id}`} data-testid={`checkbox-${id}`} className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            {text}
        </label>
    );
}