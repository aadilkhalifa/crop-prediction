# Crop and Fertilizer recommendation

A website that allows farmers to get a crop and fertilizer recommendation based on their soil and location details using machine learning models.

## Introduction

Agriculture, along with related sectors, is the largest source of livelihood in India. Machine learning can be an essential decision support tool for farmers providing recommended crops, fertilizers, and other practices based on collected data. Here, we have used machine learning models to predict the best crop and best fertilizers to be used based on the soil quality and location. We explored different machine learning algorithms and have performed an analysis. We have also integrated the models into a website where users can enter their soil details and get a crop and fertilizer recommendation.

## Demo

![Alt Text](https://github.com/aadilkhalifa/crop-prediction/blob/main/images/demo.gif?raw=true)


## Technologies

- ReactJS
- Flask
- Python

## Datasets used

- [Crop recommendation](https://www.kaggle.com/atharvaingle/crop-recommendation-dataset)
- [Rainfall prediction](https://www.kaggle.com/rajanand/rainfall-in-india)
- [Fertilizer recommendation](https://www.kaggle.com/gdabhishek/fertilizer-prediction)

## APIs used

- [Mapbox API](https://www.mapbox.com/) to get the coordinates using the state and district.
- [OpenWeatherMap API](https://openweathermap.org/) to get the weather data from coordinates.

## Architecture

<img src="https://github.com/aadilkhalifa/crop-prediction/blob/main/images/block-diagram.jpg?raw=true" alt="drawing" width="500"/>


## Running the app

You need to first start the server

```bash
cd server
python server.py
```
This will start the server of localhost port 5000

You can now run the app on a separate terminal from the root directory

```bash
npm start
```
## Results

Accuracy comparison of different Crop Recommendation models:

<img src="https://github.com/aadilkhalifa/crop-prediction/blob/main/images/crop-accuracy.jpg?raw=true" alt="drawing" width="500"/>


Accuracy comparison of different Fertilizer Recommendation models:

<img src="https://github.com/aadilkhalifa/crop-prediction/blob/main/images/fertilizer-accuracy.jpg?raw=true" alt="drawing" width="500"/>


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
