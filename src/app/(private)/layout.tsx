import { AppHeader } from "@/widgets/app-header";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <AppHeader variant="private" />
      {children}
    </main>
  );
}
