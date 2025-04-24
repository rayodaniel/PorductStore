import { SubtitleProps } from "@/shared/models/atoms/atoms";



export const Subtitle = ({ title }: SubtitleProps) => {
  return (
    <div >
      <h2 className="text-3xl font-bold">{title}</h2>
    </div>
  );
}