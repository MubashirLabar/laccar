import Header from "./header";
import { Sidebar } from "./sidebar";

export default function Layout({ className, children }) {
  return (
    <div className={`w-full min-h-screen flex ${className}`}>
      <Sidebar />
      <div className="w-full flex flex-col ml-[250px]">
        <Header />
        <>{children}</>
      </div>
    </div>
  );
}
