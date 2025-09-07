import CsvDivider from "./components/CssDivider";
import SvgDivider from "./components/SvgDivider";

export default function Home() {
  return (
    <div className="items-center">
      <main>
        <div className="svg1">
          <h1 className="text-center">CSV Divider (clipPath)</h1>
        </div>
        <CsvDivider />
        <div className="svg2">
          <h1 className="text-center">SVG Divider (SVG path)</h1>
        </div>
        <SvgDivider />
      </main>
    </div>
  );
}
