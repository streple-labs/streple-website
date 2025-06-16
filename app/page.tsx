import DesktopHome from "@/components/home/DesktopHome";
import MobileHome from "@/components/home/MobileHome";

export default function Home() {
  return (
    <div className="flex flex-col">
      <DesktopHome />
      <MobileHome />
    </div>
  );
}
