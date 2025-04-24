import { TitleProps } from "@/shared/models/atoms/atoms";



export const Title = ({ title }: TitleProps) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">{title}</h1>
    </div>
  );
}