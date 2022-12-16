import { Dispatch, SetStateAction, useContext } from "react";
import { StyledSearch } from "./style";
import SearchIcon from "@mui/icons-material/Search";
import Input from "../Input";
import { ProductContext } from "../../contexts/ProductContext";

interface iSearchProps {
  showSearch: boolean;
  setShowSearch: Dispatch<SetStateAction<boolean>>;
}

const Search = ({ showSearch, setShowSearch }: iSearchProps) => {
  const { setSearch } = useContext(ProductContext);

  return (
    <StyledSearch>
      {showSearch ? (
        <>
          <div>
            <button
              onClick={() => {
                return setShowSearch(false), setSearch("");
              }}
            >
              <SearchIcon style={{ color: "white" }} />
            </button>
          </div>

          <Input
            type="text"
            placeholder="Pesquisar..."
            inputStyle="search"
            onChange={({ target }) => setSearch(target.value)}
          />
        </>
      ) : (
        <button onClick={() => setShowSearch(true)}>
          <SearchIcon style={{ color: "#bdbdbd" }} />
        </button>
      )}
    </StyledSearch>
  );
};

export default Search;
