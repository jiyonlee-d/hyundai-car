import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./Home";
import "./reset.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
