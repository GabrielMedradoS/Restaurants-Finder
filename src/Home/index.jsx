import React, { useState } from "react";

import {
  Container,
  Logo,
  Search,
  Wrapper,
  CarrouselTitle,
  ModalTitle,
  ModalContent,
} from "./styles";
import logo from "../assets/logo.svg";
import restaurante from "../assets/restaurante-fake.png";

import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";

import Slider from "react-slick";
import { ImageCard } from "../components/ImageCard";

import { RestaurantCard } from "../components/RestaurantsCards";

import { Map, Loader, Skeleton } from "../components";

import { Modal } from "../components/Modal";
import { useSelector } from "react-redux";

export function Home() {
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState(null);
  const [placeId, setPlaceId] = useState(null);
  const [modalOpened, setmodalOpened] = useState(false);
  const { restaurants, restaurantSelected } = useSelector(
    (state) => state.restaurants
  );

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
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

  function handleOpenModal(placeId) {
    setPlaceId(placeId);
    setmodalOpened(true);
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
          {restaurants.length > 0 ? (
            <>
              <CarrouselTitle>Na sua Área</CarrouselTitle>
              <Slider {...settings}>
                {restaurants.map((restaurant) => (
                  <ImageCard
                    key={restaurant.place_id}
                    photo={
                      restaurant.photos
                        ? restaurant.photos[0].getUrl()
                        : restaurante
                    }
                    title={restaurant.name}
                  />
                ))}
              </Slider>
            </>
          ) : (
            <Loader />
          )}
        </Search>

        {restaurants.map((restaurant) => (
          <RestaurantCard
            onClick={() => handleOpenModal(restaurant.place_id)}
            restaurant={restaurant}
          />
        ))}
      </Container>
      <Map query={query} placeId={placeId} />

      <Modal open={modalOpened} onClose={() => setmodalOpened(!modalOpened)}>
        {restaurantSelected ? (
          <>
            <ModalTitle>{restaurantSelected?.name}</ModalTitle>
            <ModalContent>
              {restaurantSelected?.formatted_phone_number}
            </ModalContent>
            <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
            <ModalContent>
              {restaurantSelected?.open_hours
                ? "Aberto agora"
                : "Estamos fechados"}
            </ModalContent>
          </>
        ) : (
          <>
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
          </>
        )}
      </Modal>
    </Wrapper>
  );
}
