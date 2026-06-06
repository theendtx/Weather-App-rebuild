import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { FavoritesProvider } from "./context/FavoritesContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; 

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </QueryClientProvider>
  </StrictMode>,
)
