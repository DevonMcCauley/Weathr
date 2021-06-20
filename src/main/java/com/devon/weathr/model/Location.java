package com.devon.weathr.model;


// Used to get the latitude and longitude from the user
// Passed to the API to determine office location and grid points
public class Location {

    private double latitude;
    private double longitude;


    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }
}
