package com.toll.app.controller;

import com.amazonaws.services.comprehend.model.DetectSentimentRequest;
import com.amazonaws.services.comprehend.model.DetectSentimentResult;
import com.toll.app.TollApplication;
import com.toll.app.model.AnalyzeResult;
import com.toll.app.model.Product;
import com.toll.app.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/analyze")
public class Controller {
    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/text")
    public String analyze(@RequestParam("text") String text) {
        System.out.println("Calling DetectSentiment");
        DetectSentimentRequest detectSentimentRequest = new DetectSentimentRequest().withText(text)
                .withLanguageCode("en");
        DetectSentimentResult detectSentimentResult = TollApplication.amazonComprehend.detectSentiment(detectSentimentRequest);
        System.out.println(detectSentimentResult);
        System.out.println("End of DetectSentiment\n");
        System.out.println("Done");
        return detectSentimentResult.getSentiment().toString();
    }

    @GetMapping("/addproduct/")
    public Product addprod(@RequestParam("name") String name, @RequestParam("reviews") String reviews) {
        Product p = new Product();
        p.setId(Double.toString(Math.random() * 100));
        p.setName(name);
        String[] elements = reviews.split(",");

// step two : convert String array to list of String
        List<String> fixedLenghtList = Arrays.asList(elements);

// step three : copy fixed list to an ArrayList
        ArrayList<String> listOfString = new ArrayList<String>(fixedLenghtList);
        p.setReviews(listOfString);

        return productRepository.insert(p);

    }

    @GetMapping("/analyzesentiment")
    public AnalyzeResult findsentiment(@RequestParam("reviews") String reviews) {
        String[] elements = reviews.split(",");

// step two : convert String array to list of String
        List<String> fixedLenghtList = Arrays.asList(elements);
        List<String> goodsentiment = new ArrayList<>();
        List<String> badsentiment = new ArrayList<>();

// step three : copy fixed list to an ArrayList
        ArrayList<String> listOfString = new ArrayList<String>(fixedLenghtList);
        DetectSentimentRequest detectSentimentRequest = new DetectSentimentRequest();


        for (String s : listOfString
        ) {
            detectSentimentRequest.withText(s).withLanguageCode("en");
            DetectSentimentResult detectSentimentResult = TollApplication.amazonComprehend.detectSentiment(detectSentimentRequest);
            if (detectSentimentResult.getSentiment().equals("POSITIVE"))
                goodsentiment.add(s);
            else
                badsentiment.add(s);


        }
        AnalyzeResult analyzeResult = new AnalyzeResult();
        analyzeResult.setGoodcount(goodsentiment.size());
        analyzeResult.setBadcount(badsentiment.size());
        if (goodsentiment.size() >= badsentiment.size())
            analyzeResult.setGoodbadcount(true);
        else
            analyzeResult.setGoodbadcount(false);
        analyzeResult.setBadreviews(new ArrayList<>(badsentiment));
        return analyzeResult;
    }

    @GetMapping("/analyzebadreviews")
    public void analyzebadreviews(@RequestParam("reviews") String badreviews)
    {
        String[] elements = badreviews.split(",");

// step two : convert String array to list of String
        List<String> fixedLenghtList = Arrays.asList(elements);

// step three : copy fixed list to an ArrayList
        ArrayList<String> listOfString = new ArrayList<String>(fixedLenghtList);


    }

}
