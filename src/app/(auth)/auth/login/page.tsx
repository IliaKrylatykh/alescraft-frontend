import { AuthCard } from "@/widgets/auth";

export default async function LoginPage() {
  return (
    <main className="flex items-center justify-center">
      <AuthCard variant="login" />
    </main>
  );
}
