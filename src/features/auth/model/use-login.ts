import { useMutation } from "@tanstack/react-query";
import { LoginFormValues } from "../ui/login-form";
import { AuthService } from "@/entities/user";
import { AxiosError } from "axios";

export function useLogin() {
  const loginMutation = useMutation<void, AxiosError, LoginFormValues>({
    mutationFn: async (data: LoginFormValues) => {
      await AuthService.login(data.email, data.password);
    },
    onError: (error: unknown) => {
      console.error("Login error:", error);
    },
  });
  return {
    login: loginMutation.mutate,
    isPending: loginMutation.isPending,
  };
}
