package com.devon.weathr.controller;


import com.devon.weathr.model.Location;
import com.devon.weathr.model.Metadata;
import com.devon.weathr.model.Properties;
import com.devon.weathr.model.Weather;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
public class WeatherController {

    RestTemplate restTemplate = new RestTemplate();


    @GetMapping("/")
    public String location(Model model) {
        model.addAttribute("location", new Location());
        return "index";
    }


    // Queries the NWS API to get office (CWA) and location information
    public List<Weather> getWeather(double latitude, double longitude) {
        Metadata metadata = restTemplate.getForObject(System.getenv("API_POINTS") + latitude + "," + longitude + "", Metadata.class);
        Properties properties = metadata.getProperties();
        Metadata forecast = restTemplate.getForObject(System.getenv("API_GRID") + properties.getCWA() + "/" + properties.getGridX() + "," + properties.getGridY() + System.getenv("FORECAST_HOURLY"), Metadata.class);


        return forecast.getProperties().getWeather();
    }


    // On POST, queries the getWeather method to get the weather for the given coordinates
    @PostMapping("/")
    public ModelAndView weatherSearch(@ModelAttribute Location location, Model model) {

        double latitude = location.getLatitude();
        double longitude = location.getLongitude();

        List<Weather> weatherList = getWeather(latitude, longitude);
        Weather weather = weatherList.get(0);
        return new ModelAndView("weatherResult", "weather", weather);

    }


}
