import { createContext, useState } from "react";

export const FavoritesContext = createContext<string[]>([]);

export function FavoritesProvider({ children}: {
    children: React.ReactNode;
}) {
    const [favorites] = useState<string[]>([]);

    return (
        <FavoritesContext.Provider value={favorites}>
            {children}
        </FavoritesContext.Provider>
    );
}