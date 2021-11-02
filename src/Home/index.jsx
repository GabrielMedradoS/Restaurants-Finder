import React, { useState } from "react";

import {
  Container,
  Logo,
  Search,
  Wrapper,
  /* Map, */
  CarrouselTitle,
} from "./styles";
import logo from "../assets/logo.svg";
import restaurante from "../assets/restaurante-fake.png";

import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";

import Slider from "react-slick";
import { ImageCard } from "../components/ImageCard";

import { RestaurantCard } from "../components/RestaurantsCards";

import { Map } from "../components";

import { Modal } from "../components/Modal";

export function Home() {
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState(null);
  const [modalOpened, setmodalOpened] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handleKeyPress(e) {
    if (e.codeKey === "Enter") {
      setQuery(inputValue);
    }
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do restaurant" />
          <TextField
            label="Pesquisar Restaurantes"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}
          >
            <Input
              value={inputValue}
              onKeyPress={handleKeyPress}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </TextField>
          <CarrouselTitle>Na sua Área</CarrouselTitle>
          <Slider {...settings}>
            <ImageCard photo={restaurante} title="restaurante" />
            <ImageCard photo={restaurante} title="restaurante" />
            <ImageCard photo={restaurante} title="restaurante" />
            <ImageCard photo={restaurante} title="restaurante" />
          </Slider>
          <button onClick={() => setmodalOpened(true)}>Abrir Modal</button>
        </Search>
        <RestaurantCard />
      </Container>
      <Map query={query} />
      <Modal open={modalOpened} onClose={() => setmodalOpened(!modalOpened)} />
    </Wrapper>
  );
}
