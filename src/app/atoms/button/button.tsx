import { dictionaryColor } from "@/shared/providers/colorButton";

export default function Button({
    text,
    color,
    onClickUpdate,
}: {
    text: string;
    color?: "blue" | "white" | "black";
    onClickUpdate?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {

    return (
        <button
            onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                onClickUpdate?.(event)
            }
            type="button"
            className={dictionaryColor(color || "white")}
        >
            {text}
        </button>
    );
}