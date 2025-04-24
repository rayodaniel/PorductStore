import Checkbox from "@/app/atoms/checkbox/checkbox";
import Label from "@/app/atoms/label/label";

export default function CheckLabel({ text, id, onChangecheck }: { text: string; id: string; onChangecheck: (checked: boolean, text: string) => void; }) {
    const handelChange = (checked: boolean) => {
        onChangecheck(checked, text);
    }
    return (
        <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li className="</ul>w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <div className="flex items-center ps-3">
                    <Checkbox onChangecheck={(check) => handelChange(check)} id={id} />
                    <Label text={text} id={id} />
                </div>
            </li>
        </ul>
    );
}