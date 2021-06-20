package com.devon.weathr.model;

import com.fasterxml.jackson.annotation.JsonProperty;


// Models the returned weather information
public class Weather {

    @JsonProperty
    private int number;

    @JsonProperty
    private int temperature;

    @JsonProperty
    private String windSpeed;

    @JsonProperty
    private char temperatureUnit;

    @JsonProperty
    private String shortForecast;


    public int getHour() {
        return number;
    }

    public int getTemperature() {
        return temperature;
    }

    public char getTemperatureUnit() {
        return temperatureUnit;
    }

    public String getWindSpeed() {
        return windSpeed;
    }

    public String getShortForecast() {
        return shortForecast;
    }

}
