package com.toll.app.model;

import java.util.ArrayList;

public class AnalyzeResult {

    private int goodcount;
    private int badcount;
    private boolean goodbadcount;
    private ArrayList<String> badreviews;

    public boolean isGoodbadcount() {
        return goodbadcount;
    }

    public int getGoodcount() {
        return goodcount;
    }

    public void setGoodcount(int goodcount) {
        this.goodcount = goodcount;
    }

    public int getBadcount() {
        return badcount;
    }

    public void setBadcount(int badcount) {
        this.badcount = badcount;
    }

    public void setGoodbadcount(boolean goodbadcount) {
        this.goodbadcount = goodbadcount;
    }

    public ArrayList<String> getBadreviews() {
        return badreviews;
    }

    public void setBadreviews(ArrayList<String> badreviews) {
        this.badreviews = badreviews;
    }
}
