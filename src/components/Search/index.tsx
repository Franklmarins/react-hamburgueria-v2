import { useContext } from "react";
import { StyledSearch } from "./style";
import SearchIcon from "@mui/icons-material/Search";
import Input from "../Input";
import { ProductContext } from "../../contexts/ProductContext";

const Search = () => {
  const { setSearch } = useContext(ProductContext);

  return (
    <StyledSearch>
      <div>
        <SearchIcon />
      </div>
      <Input
        type="text"
        placeholder="Pesquisar..."
        inputStyle="search"
        onChange={({ target }) => setSearch(target.value)}
      />
    </StyledSearch>
  );
};

export default Search;
