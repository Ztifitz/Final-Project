function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");
  
    // Use the list of model names to populate the select options
    d3.json("AAPL.json").then((data) => {
      var modelNames = data.names;
  
      modelNames.forEach((name) => {
        selector
          .append("option")
          .text(name)
          .property("value", name);
      });
  
      // Use the lack of model name from the list to build the initial plots
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
     
      // Use d3 to select the panel with id of `#sample-metadata`
      var PANEL = d3.select("#sample-metadata");
  
      // Use `.html("") to clear any existing metadata
      PANEL.html("");
  
      
      var moddesc = modeldesc[model]
      console.log(moddesc)
      //Object.entries(moddesc).filter(([key, value]) => {
        PANEL.append("h3").text(`${moddesc}`);

        //PANEL.append("h3").text('${value}');
      });
  
    };
  
  
// Create a Line Chart

// 1. Create the buildCharts function.
function buildCharts(model) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("AAPL.json").then((data) => {
    
    console.log(model)
    var Dates = Object.values(data.Date);
        
    //console.log(Dates)

    var AdjClose = Object.values(data.Adjusted_Close);
    //console.log(AdjClose)
    //var textmod = `${model}`;
    //console.log(textmod)
    var Modeldata = data[model];
    var Modelvalues = Object.values(Modeldata)
    //console.log(Modelvalues)

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



  

   
