package com.devon.weathr.model;

import com.fasterxml.jackson.annotation.JsonProperty;


// Encapsulates the returned API data (broken down into the Weather class
public class Metadata {
    @JsonProperty
    private Properties properties;
    @JsonProperty
    private String id;


    public Metadata() {

    }

    public Properties getProperties() {
        return properties;
    }

    public String getId() {
        return id;
    }

}
