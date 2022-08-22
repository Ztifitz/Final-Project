# :chart_with_upwards_trend: Final-Project :chart_with_upwards_trend:

## Selected Topic

Prediction of AAPL stock’s value  

## Reason Of Selected Topic

By analyzing the stock market data and trends for the AAPL. Our machine learning model will predict the adjusted close price of these stocks. This will help companies, investment firms or even individuals to better understand market behavior and make data-driven decisions for investments and trades. The objective of this project is to, first, accurately predict the Adjusted Close values for historical data of a stock using linear regressions. We will then use other machine learning models for the same purpose, Random Forest Regressor and Short Long Term Memory are the models being considered. After that, we will compare the accuracy of the results for each model and determine what model works best for trying to predict AAPL’s stock variation. 

If time permits, we want to use sentiment analysis to try and determine a correlation between stock price variations and conversations about the stock in social media. We want to leave the classification problem as an additional point in the study in the interest of viability of execution.

## Description Of The Source Of Data

Yahoo Finance: contains the latest market data on AAPL’s stock price of the last 1 year (yfinance library). Additional datasets would be obtained from Kaggle.com.

## Questions Data Set Will Answer

 + Can we use a machine learning model to identify patterns?
 + Can we use machine learning models to predict the behavior of stock prices?
 + Which machine learning model has better accuracy using the same dataset?
 + Are the results in the models enough information to make investment decisions?

 + EXTRA: How much do emotions on Twitter and news headlines affect a stock's price?

## Machine Learning Model

| Model                    | Train and Test Sets          | Parameters                                    | Score Accuracy                  |
| ------------------------ | ---------------------------- | --------------------------------------------- | ------------------------------- |
| Simple linear regression | 80% train data 20% test data | Historical stock prices 10-day moving average | R squared: Mean Squared Error:  |
| RandomForest Regressor   | 80% train data 20% test data | 10- day price prediction                      | R squared:  Mean Squared Error: |
| LSTM                     | 80% train data 20% test data | 10-day moving average epochs: 3               | Mean Squared Error:             |       

## Database Integration

For the database, we will be using the Yahoo Finance API to extract the stock data and we will calculate moving averages to use as reference for our prediction models. Since we are consulting the data from an API, we do not need to set up personal databases either in SQL or AWS. The Yahoo Finance API returns columns that will not be used in our machine learning models, this is why the following schema is considering only the ones relevant for our analysis.

| Entity Name of the field | Properties Description              | Data type | 
| ------------------------ | ----------------------------------- | --------- |
| Date                     | Date on which the stock was traded  | DATE      | 
| Adj_Close                | Adjusted close value of the stock   | FLOAT     | 
| Mv_Avg                   | Moving average for the last 10 days | FLOAT     |



















