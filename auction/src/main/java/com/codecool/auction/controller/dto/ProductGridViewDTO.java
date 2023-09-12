package com.codecool.auction.controller.dto;

import com.codecool.auction.model.ProductType;

import java.math.BigDecimal;

public record ProductGridViewDTO (String name, BigDecimal price, String pictureURL, int id, ProductType type){
}
