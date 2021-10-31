import React, { useState } from "react";
import { Container, Search } from "./styles";
import TextField, { Input } from "@material/react-text-field";
import logo from "../assets/logo.svg";

export function Home() {
  const [inputValue, setInputValue] = useState("");

  return (
    <Container>
      <Search>
        <img src={logo} alt="Logo do restaurant" />
        <TextField
          label="pesquisar"
          outlined
          /*           helperText={<HelperText>Help Me!</HelperText>}
          onTrailingIconSelect={() => this.setState({value: ''})}
          trailingIcon={<MaterialIcon role="button" icon="delete"/>} */
        >
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </TextField>
      </Search>
    </Container>
  );
}
