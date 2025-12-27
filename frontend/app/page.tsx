import Sidebar from "@/components/Sidebar/page";
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-white">
        <Dashboard/>
      </main>
    </div>

  );
}
