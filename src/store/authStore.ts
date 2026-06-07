import { create } from "zustand";

type AuthStore = {
    token: string | null;

    login: () => void;
    logout: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
    token: null,

    login: () => 
        set({
            token: "fake-jwt-token"
        }),
    
        logout: () =>
        set({
            token: null
        })
}));