import React from "react";
import { StyledSearch } from "./style";
import SearchIcon from "@mui/icons-material/Search";
import Input from "../Input";

const Search = () => {
  return (
    <StyledSearch>
      <div>
        <SearchIcon />
      </div>
      <Input type="text" placeholder="Pesquisar..." inputStyle="search" />
    </StyledSearch>
  );
};

export default Search;
