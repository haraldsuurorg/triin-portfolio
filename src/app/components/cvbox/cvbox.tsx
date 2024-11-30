
interface CVBoxProps {
    years: string,
    text: string
}

export default function CVBox({years, text}: CVBoxProps) {
  return (
    <div className="flex flex-col items-center md:contents gap-4">
      <h4 className="text-nowrap text-primary font-semibold">{years}</h4>
      <p className="text-center md:text-left">{text}</p>
    </div>
  );
}
