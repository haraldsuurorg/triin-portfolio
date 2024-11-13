
interface CVBoxProps {
    years: string,
    text: string
}

export default function CVBox({years, text}: CVBoxProps) {
  return (
    <div className="flex gap-4">
      <h4 className="flex-[0.15_0_0] text-nowrap text-primary font-semibold">{years}</h4>
      <p className="flex-[0.85_0_0]">{text}</p>
    </div>
  );
}
