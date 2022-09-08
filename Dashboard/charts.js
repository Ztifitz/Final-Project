function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");
  
    // Use the list of sample names to populate the select options
    d3.json("AAPL.json").then((data) => {
      var modelNames = data.names;
  
      modelNames.forEach((name) => {
        selector
          .append("option")
          .text(name)
          .property("value", name);
      });
  
      // Use the first sample from the list to build the initial plots
      var firstModel = modelNames[0];
      buildCharts(firstModel);
      buildMetadata(firstModel);
    });
  }
  
  // Initialize the dashboard
  init();
  
  function optionChanged(newModel) {
    // Fetch new data each time a new sample is selected
    buildMetadata(newModel);
    buildCharts(newModel);
    
  }
  
  // Demographics Panel 
  function buildMetadata(model) {
    d3.json("AAPL.json").then((data) => {
      console.log("data",data)
      var modeldesc = data.desc;
      console.log(modeldesc)
      // Filter the data for the object with the desired sample number
      //var resultmd = modeldesc.filter(modelObj => modelObj.key == model);
      //var resultArray = modeldesc.model;
      //console.log(resultArray)
      //var md = resultmd[0];
      // Use d3 to select the panel with id of `#sample-metadata`
      var PANEL = d3.select("#sample-metadata");
  
      // Use `.html("") to clear any existing metadata
      PANEL.html("");
  
      // Use `Object.entries` to add each key and value pair to the panel
      // Hint: Inside the loop, you will need to use d3 to append new
      // tags for each key-value in the metadata.
      
      //var resultmod = modeldesc.filter(modelObj => modelObj.key == model)
      //var resmod = resultmod[0]
      //console.log(resultmod)
      //console.log(resmod)
      var moddesc = modeldesc[model]
      console.log(moddesc)
      //Object.entries(moddesc).filter(([key, value]) => {
        PANEL.append("h3").text(`${moddesc}`);

        //PANEL.append("h3").text('${value}');
      });
  
    };
  
  
// DELIVERABLE 1 Requirements
// Create a Horizontal Bar Chart

// 1. Create the buildCharts function.
function buildCharts(model) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("AAPL.json").then((data) => {
    
    //var dict = {};
    //var addPair = function (myKey, myValue) {
    //dict[myKey] = myValue;
    //};
    //var giveValue = function (myKey) {
    //return dict[myKey];
  //};
    console.log(model)
    var Dates = Object.values(data.Date);


    //var HistDate = [];
    //Date.forEach(key => {key < 50  });
    //HistDate.append(element)
    
    //console.log(Dates)

    var AdjClose = Object.values(data.Adjusted_Close);
    //console.log(AdjClose)
    //var textmod = `${model}`;
    //console.log(textmod)
    var Modeldata = data[model];
    var Modelvalues = Object.values(Modeldata)
    //console.log(Modelvalues)

    //Object.entries(data.Date).filter(key => k > 50);//[data.Date[0,40]]
    //console.log(Date)
    // 3. Create a variable that holds the samples array. 
    //var samples = data.samples;
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    //var resultArray = samples.filter(sampleObj => sampleObj.id == sample);
    //  5. Create a variable that holds the first sample in the array.
    //var result = resultArray[0];

    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    //var  ids = result.otu_ids;
    //var labels = result.otu_labels.slice(0, 10).reverse();
    //var values = result.sample_values.slice(0,10).reverse();

    //var bubbleLabels = result.otu_labels;
    //var bubbleValues = result.sample_values;

    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 

    //var yticks = ids.map(sampleObj => "OTU " + sampleObj).slice(0,10).reverse();

    //console.log(yticks)

    // 8. Create the trace for the bar chart. 
    var lineDataAC = {
      x: Dates,
      y: AdjClose,
      mode: 'scatter',
      name: 'Real Adjusted Close' 
    };

    var lineDataModel ={
      x: Dates,
      y: Modelvalues,
      mode: 'scatter',
      name: model 
    };

    var lines = [lineDataAC, lineDataModel];
    // 9. Create the layout for the bar chart. 
    var barLayout = {
     title: "Prediction vs Adjusted Close",
     innerWidth: 1000,
     innerHeight: 500,
     xaxis: {title:'Dates'    },
     yaxis: {title:'Stock value'}
    };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", lines, barLayout);



  });
}



  

   