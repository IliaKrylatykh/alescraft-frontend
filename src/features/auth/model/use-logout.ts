import { AuthService } from "@/entities/user";
import { useMutation } from "@tanstack/react-query";

export function useLogout() {
  const logoutMutation = useMutation({
    mutationFn: async () => {
      await AuthService.logout();
    },
    onError: (error: unknown) => {
      console.error("Logout error:", error);
    },
  });
  return {
    logout: logoutMutation.mutate,
    isPending: logoutMutation.isPending,
  };
}
