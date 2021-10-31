import React, { useState } from "react";
import {
  Container,
  Logo,
  Search,
  Wrapper,
  Map,
  CarrouselTitle,
} from "./styles";
import logo from "../assets/logo.svg";
import restaurante from "../assets/restaurante-fake.png";

import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";

import Slider from "react-slick";
import { ImageCard } from "../components/ImageCard";

export function Home() {
  const [inputValue, setInputValue] = useState("");

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

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
        </Search>
      </Container>
      <Map />
    </Wrapper>
  );
}
