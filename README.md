# :chart_with_upwards_trend: Final-Project :chart_with_upwards_trend:

## Second Delivery

### Presentation


We have set up our presentation here: [Google Slides](https://docs.google.com/presentation/d/15q5HLx494RaGAU1JQ_ZHuZIJJWDQfa9InAoG0i-CS7E/edit#slide=id.gbb0906d0eb_0_1716)

All of the images added to this README are part of the presentation.

---
### Machine Learning Models

The models decided upon were the Random Forest Regressor, Linear Regressionand Long Short Term Memory to try and predict AAPL's stock price. 

![image](https://user-images.githubusercontent.com/101848882/187092059-bd976a2f-0f13-43ce-b00c-652b2c2304c7.png)


---
### Database

We will be using PostgreSQL and also hosting our data in an AWS S3 bucket. The database was built using the data extracted from Yahoo Finance and new tables were made containing the prediction values for each model. Our primary and foreign key is the Date column and we used it to make a join with the prediction results. All of the data was saved in a PostgreSQL database and AWS for easy access and consultation. 

The image below represents the tables of data and how they are uploaded into the database:

![image](https://user-images.githubusercontent.com/101848882/187091656-ed5e5139-bd4f-4a8e-adb4-fca924a6f27f.png)

---

### Dashboard

The dashboard will have a summary of our project. The user will be able to choose which machine learning model to use to predict AAPL’s stock price and then will get the result.

The user will receive a small summary describing the accuracy of the model and a graph showing the predicted results. 

This way the user would be able to determine by (him/her)self on which model their probable investment decisions will be based. We attached a rudimentary sketch of what we want the dashboard to look like.

![StocksDashboard](https://user-images.githubusercontent.com/101848882/187092001-5b28aea5-8907-45fd-b23c-f703a6241088.png)

Javascript will be used to graph the results of out model and we will use html to build a web page for simplicity of the user. We will still have to use python to host the local server.

![image](https://user-images.githubusercontent.com/101848882/187092035-44ceb693-cb09-4559-9afd-7d7fc27870bb.png)


---

## First Delivery

### Selected Topic

Prediction of AAPL stock’s value  

### Reason Of Selected Topic

By analyzing the stock market data and trends for the AAPL. Our machine learning model will predict the adjusted close price of these stocks. This will help companies, investment firms or even individuals to better understand market behavior and make data-driven decisions for investments and trades. The objective of this project is to, first, accurately predict the Adjusted Close values for historical data of a stock using linear regressions. We will then use other machine learning models for the same purpose, Random Forest Regressor and Short Long Term Memory are the models being considered. After that, we will compare the accuracy of the results for each model and determine what model works best for trying to predict AAPL’s stock variation. 

If time permits, we want to use sentiment analysis to try and determine a correlation between stock price variations and conversations about the stock in social media. We want to leave the classification problem as an additional point in the study in the interest of viability of execution.

### Description Of The Source Of Data

Yahoo Finance: contains the latest market data on AAPL’s stock price of the last 1 year (yfinance library). Additional datasets would be obtained from Kaggle.com.

### Questions Data Set Will Answer

 + Can we use a machine learning model to identify patterns?
 + Can we use machine learning models to predict the behavior of stock prices?
 + Which machine learning model has better accuracy using the same dataset?
 + Are the results in the models enough information to make investment decisions?

 + EXTRA: How much do emotions on Twitter and news headlines affect a stock's price?

### Machine Learning Model

| Model                    | Train and Test Sets          | Parameters                                    | Score Accuracy                  |
| ------------------------ | ---------------------------- | --------------------------------------------- | ------------------------------- |
| Simple linear regression | 70% train data 30% test data | Historical stock prices 10-day moving average | R squared: Mean Squared Error:  |
| RandomForest Regressor   | 70% train data 30% test data | 10- day price prediction                      | R squared:  Mean Squared Error: |
| LSTM                     | 70% train data 30% test data | 10-day moving average epochs: 3               | Mean Squared Error:             |       

### Database Integration

For the database, we will be using the Yahoo Finance API to extract the stock data and we will calculate moving averages to use as reference for our prediction models. Since we are consulting the data from an API, we do not need to set up personal databases either in SQL or AWS. The Yahoo Finance API returns columns that will not be used in our machine learning models, this is why the following schema is considering only the ones relevant for our analysis.

| **Entity - Name of the field**| **Properties - Description**              | **Data type** | 
| ------------------------ | ----------------------------------- | --------- |
| Date                     | Date on which the stock was traded  | DATE      | 
| Adj_Close                | Adjusted close value of the stock   | FLOAT     | 
| EMMA_10                  | Moving average for the last 10 days | FLOAT     |





















































