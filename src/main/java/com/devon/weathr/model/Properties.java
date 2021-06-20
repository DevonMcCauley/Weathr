package com.devon.weathr.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;


// Represents the Properties section of the API
public class Properties {
    private int gridX;
    private int gridY;
    private String cwa;
    @JsonProperty
    private List<Weather> periods;

    public Properties() {

    }

    public int getGridX() {
        return gridX;
    }

    public int getGridY() {
        return gridY;
    }

    public String getCWA() {
        return cwa;
    }

    public List<Weather> getWeather() {
        return periods;
    }
}