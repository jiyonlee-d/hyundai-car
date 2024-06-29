import { createContext, ReactElement, useContext, useState } from "react";

type SearhContextValue = {
  search: string;
  setSearch: (search: string) => void;
};
const SearchContext = createContext<SearhContextValue>({} as SearhContextValue);

const SearchContextProvider = ({ children }: { children: ReactElement }) => {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;

export const useSearchContext = () => {
  return useContext(SearchContext);
};
