import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./Home";
import "./reset.css";
import SearchContextProvider from "./components/SearchContextProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchContextProvider>
        <Home />
      </SearchContextProvider>
    </QueryClientProvider>
  );
}

export default App;
