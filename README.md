# :chart_with_upwards_trend: Final-Project :chart_with_upwards_trend:

## Select Topic

Prediction of AAPL stock’s value  

## Reason they selected the topic

By analyzing the stock market data and trends for the AAPL. Our machine learning model will predict the adjusted close price of these stocks. This will help companies, investment firms or even individuals to better understand market behavior and make data-driven decisions for investments and trades. The objective of this project is to, first, accurately predict the Adjusted Close values for historical data of a stock using linear regressions. We will then use other machine learning models for the same purpose, Random Forest Regressor and Short Long Term Memory are the models being considered. After that, we will compare the accuracy of the results for each model and determine what model works best for trying to predict AAPL’s stock variation. 

If time permits, we want to use sentiment analysis to try and determine a correlation between stock price variations and conversations about the stock in social media. We want to leave the classification problem as an additional point in the study in the interest of viability of execution.

## Description of the source of data

Yahoo Finance: contains the latest market data on AAPL’s stock price of the last 1 year (yfinance library). Kaggle

## Questions they hope to answer with the data

 + Can we use a machine learning model to identify patterns?
 + Can we use machine learning models to predict the behavior of stock prices?
 + Which machine learning model has better accuracy using the same dataset?
 + Are the results in the models enough information to make investment decisions?

 + EXTRA:How much do emotions on Twitter and news headlines affect a stock's price?

## Machine Learning Model

| Model                    | Train and Test Sets          | Parameters                                    | Score Accuracy                  |
| ------------------------ | ---------------------------- | --------------------------------------------- | ------------------------------- |
| Simple linear regression | 80% train data 20% test data | Historical stock prices 10-day moving average | R squared: Mean Squared Error:  |
| RandomForest Regressor   | 80% train data 20% test data | 10- day price prediction                      | R squared:  Mean Squared Error: |
| LSTM                     | 80% train data 20% test data | 10-day moving average epochs: 3               | Mean Squared Error:             |       

