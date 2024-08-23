import { Sidebar } from "./sidebar";

export default function Layout({ className, children }) {
  return (
    <div className={`w-full min-h-screen bg-[#212121] flex ${className}`}>
      <Sidebar />
      <div className="w-full flex flex-col ml-[250px]">{children}</div>
    </div>
  );
}
