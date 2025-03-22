import { LogoIcon } from "@/shared/assets/logo-icon";
import { AppHeader } from "@/widgets/app-header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader variant="auth" />
      <div className="flex grow bg-blue-200">
        <div className="flex flex-col items-center justify-center w-1/2">
          <LogoIcon className="w-96 h-96" />
        </div>
        {children}
      </div>
    </div>
  );
}
