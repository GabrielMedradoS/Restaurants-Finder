import React from "react";
import ReactStars from "react-rating-stars-component";
import {
  Restaurant,
  RestaurantInfo,
  Title,
  Address,
  RestaurantPhoto,
} from "./styles";

import restaurante from "../../assets/restaurante-fake.png";

export const RestaurantCard = () => (
  <Restaurant>
    <RestaurantInfo>
      <Title>Nome</Title>
      <ReactStars
        count={5}
        isHalf
        value={4}
        edit={false}
        activeColor="#e7711c"
      />
      <Address>Endereço</Address>
    </RestaurantInfo>
    <RestaurantPhoto src={restaurante} alt="foto" />
  </Restaurant>
);
