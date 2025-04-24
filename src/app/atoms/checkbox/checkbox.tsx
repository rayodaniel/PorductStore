import { useState } from "react";

export default function Checkbox({
  onChangecheck,
  id,
}: {
  onChangecheck: (checked: boolean) => void;
  id: string;
}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    onChangecheck(e.target.checked);
  };

  return (
    <input
      id={`checkbox-${id}`}
      data-testid={`checkbox-${id}`}
      type="checkbox"
      checked={isChecked}
      onChange={handleCheckboxChange}
      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-0"
    />
  );
}