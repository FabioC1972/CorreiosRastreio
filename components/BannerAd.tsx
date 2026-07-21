type Props = { size?: "horizontal" | "square" | "vertical" | "footer"; position?: string; type?: string; className?: string };
const sizes = { horizontal: "min-h-[90px] max-w-[728px]", square: "h-[250px] max-w-[300px]", vertical: "h-[600px] max-w-[160px]", footer: "min-h-[90px] max-w-[970px]" };
export default function BannerAd({ size = "horizontal", position = "", type = "Google AdSense", className = "" }: Props) {
  return <div className={`adsense-placeholder mx-auto w-full ${sizes[size]} ${className}`} role="complementary" aria-label={`Espaço publicitário ${position}`}><span><strong>Anúncio Google AdSense</strong>{position && <><br /><span className="font-normal">{position}</span></>}</span></div>;
}
