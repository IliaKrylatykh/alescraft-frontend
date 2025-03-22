import { AuthService } from "@/entities/user";
import { useMutation } from "@tanstack/react-query";
import { LoginFormValues } from '../ui/login-form'
import { AxiosError } from "axios";

export function useRegister() {
  const registerMutation = useMutation<void, AxiosError, LoginFormValues>({
    mutationFn: async (data: LoginFormValues) => {
      await AuthService.register(data.email, data.password);
    },
    onError: (error: unknown) => {
      console.error("Register error:", error);
    },
  });
  return {
    register: registerMutation.mutate,
    isPending: registerMutation.isPending,
  };
}
