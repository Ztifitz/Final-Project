# :chart_with_upwards_trend: Final-Project :chart_with_upwards_trend:

### Group Members:

| Member               	| Role 	                 | 
|----------------------	|---------------------   | 
| [Irune Echeverría](https://github.com/iruneiro33)|  Machine Learning Lead   	 |  
| [Fabiola Lara](https://github.com/FabiolaLara)    	|  Machine Learning Lead   |  
| [Erika Nagai](https://github.com/Enagai-nagai)       	|  Machine Learning Lead |  
| [Ricardo Rico](https://github.com/Ztifitz)    	|  Dashboard Lead  	     | 
| [Anna Rocha](https://github.com/annarochav)    	|  Database & Dashboard Lead  	     |  

---
### Presentation


 + We have set up our presentation here: [Google Slides_English](https://docs.google.com/presentation/d/e/2PACX-1vRh8W0nJG2R7vfK_lQrtiDU3RJ7Cx2uIOEKXQHoaLbOOgTcJqDK7RlZjdPDWJXT-g8xmPP9_J7VhGT0/pub?start=false&loop=false&delayms=3000)
 + [Google_Slides_Spanish](https://docs.google.com/presentation/d/1tTUH5ISbMFYZbHM78w0JuR9lhCFNv62LMz7nPfwyQ64/edit#slide=id.gbb87ace34f_0_26477)
 + We have set up our dashboard here: [Tableau Dashboard](https://public.tableau.com/app/profile/anna.rocha/viz/aapl_stock_predictions/final_project)

All of the images added to this README are part of the presentation.


---
### Technologies & Tools Used

<img src="https://github.com/Ztifitz/Final-Project/blob/main/Images/pic_2.png" width="750" height="" />

---
### Data Exploration Phase

<img src="https://github.com/Ztifitz/Final-Project/blob/main/Images/pic_3.png" width="750" height="" />


---

### Selected Topic

Prediction of AAPL stock’s value  

### Reason Of Selected Topic

By analyzing AAPL’s stock market data, we will train 3 machine learning models that will predict the adjusted close price for historical data from the last year. This will help companies, investment firms or even individuals to better understand market behavior and make data-driven decisions for personal investments and day trading. 

The machine learning models used will be Linear Regression, Random Forest Regressor and Short Long Term Memory. After that, we will compare the accuracy of the results for each model and determine what model works best for trying to predict AAPL’s stock variation.

### Questions We Would Like to Answer:

 + Can we use a machine learning model to identify patterns?
 + Can we use machine learning models to predict the behavior of stock prices?
 + Which machine learning model has better accuracy using the same dataset? 

### Description Of The Source Of Data

We sourced data from Yahoo Finance, it contains the latest market data on AAPL’s stock price of the last 1 year. This dataset will answer our confirmed our analysis questions. 

---

### Machine Learning Model

| Model                    | Train and Test Sets          | Parameters                                    | Score Accuracy                  |
| ------------------------ | ---------------------------- | --------------------------------------------- | ------------------------------- |
| Simple linear regression | 70% train data 30% test data | Historical stock prices 10-day moving average | R squared: Mean Squared Error:  |
| RandomForest Regressor   | 70% train data 30% test data | Historical stock prices (251 days as input)   | R squared:  Mean Squared Error: |
| LSTM                     | 70% train data 30% test data | 10-day moving average epochs: 3               | Mean Squared Error:             |       

<img src="https://github.com/Ztifitz/Final-Project/blob/main/Images/pic_7.png" width="750" height="" />
<img src="https://github.com/Ztifitz/Final-Project/blob/main/Images/pic_8.png" width="750" height="" />

---

### Database Integration

We will be using PostgreSQL and also hosting our data in an AWS S3 bucket. The database was built using the data extracted from Yahoo Finance and new tables were made containing the prediction values for each model. Our primary and foreign key is the Date column and we used it to make a join with the prediction results. All of the data was saved in a PostgreSQL database and AWS for easy access and consultation. 

The image below represents the tables of data and how they are uploaded into the database:

<img src="https://github.com/Ztifitz/Final-Project/blob/main/Images/pic_4.png" width="750" height="" />

---

### Web Application Dashboard

The web application dashboard will have a summary of our project. The user will be able to choose which machine learning model to use to predict AAPL’s stock price and then will get the result.

The user will receive a small summary describing the accuracy of the model and a graph showing the predicted results. 

This way the user would be able to determine by (him/her)self on which model their probable investment decisions will be based. We attached a rudimentary sketch of what we want the dashboard to look like.

Javascript will be used to graph the results of out model and we will use html to build a web page for simplicity of the user. We will still have to use python to host the local server.

<img src="https://github.com/Ztifitz/Final-Project/blob/main/Images/pic_9.png" width="750" height="" />


---

### Tableau Dashboard

**Interactive elements:** 

The month, quarter and year will be selected from a drop down menu to change the graph. Tableau dashboard can be found [here.](https://public.tableau.com/app/profile/anna.rocha/viz/aapl_stock_predictions/final_project) 

**Other elements:**

 + The remaining elements in the dashboard are static, but are designed to effectively showcase various skills we have learned throughout the course. 
 + The graphs reflect information from our dataset, and allow the user to get a good overview about each model predictions.

<img src="https://github.com/Ztifitz/Final-Project/blob/main/Images/pic_6.png" width="750" height="" />








































































