//Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);
//--------------------------------------------------------------------------------------------------------------------------

//BAR CHART PRACTICE
// var trace = {
//     x:['burrito','pizza','chicken'],
//     y:[10,18,5],
//     type: 'bar'
// };

// var layout = {
//     title: 'Luncheon Survey',
//     xaxis: {title:'Food Option'},
//     yaxis:{title:'Number of Respondents'}
// };


// var trace = {
//     x:["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y:[22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type:'bar'
// };

// var layout = {
//     title:'Drink Survey',
//     xaxis:{title:'Drink Choices'},
//     yaxis:{title:'Votes'}
// };
//--------------------------------------------------------------------------------------------------------------------------

//PIE CHART PRACTICE
// var trace = {
//     labels:["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values:[22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type:'pie'
// };

// var layout = {
//     title:'"Pie" Chart'
// };
//--------------------------------------------------------------------------------------------------------------------------

//SCATTER CHART PRACTICE
// var trace = {
//     x:["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y:[22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     mode: 'lines+markers', //can also be 'lines' or 'markers'
//     type:'scatter'
// };

// var layout = {
//     title:'"Scatter" Chart'
// };
// Plotly.newPlot('plotArea',[trace], layout);

//var numbers = [0,2,4,6,8];
//var fiveMore = numbers.map(num => num + 5);
//console.log(fiveMore);

// var cities = [
//     {
//       "Rank": 1,
//       "City": "San Antonio ",
//       "State": "Texas",
//       "Increase_from_2016": "24208",
//       "population": "1511946"
//     },
//     {
//       "Rank": 2,
//       "City": "Phoenix ",
//       "State": "Arizona",
//       "Increase_from_2016": "24036",
//       "population": "1626078"
//     },
//     {
//       "Rank": 3,
//       "City": "Dallas",
//       "State": "Texas",
//       "Increase_from_2016": "18935",
//       "population": "1341075"
//     }
// ];

// var cityPops = cities.map(pop => pop.population);
// console.log(cityPops);

// var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
// var sWords = words.filter(animal => animal.startsWith('s'));
// console.log(sWords);

// var familyAge = [3,2,39,37,9];
// var sortedAge = familyAge.sort((a,b) => a - b);
// console.log(sortedAge);

// var familyAge = [3,2,39,37,9];
// var sortedAge = familyAge.sort((anElement,anotherElement) => anElement -
// anotherElement);
// console.log(sortedAge);

// var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse(); 
// console.log(sortedCities);

// var topFiveCities = sortedCities.slice(0,5);

// var topFiveCityNames = topFiveCities.map(city => city.City);
// var topFiveCityGrowths = topFiveCities.map(growth => parseInt(growth.Increase_from_2016));
// console.log(topFiveCityNames);
// console.log(topFiveCityGrowths);

// var trace = {
//     x: topFiveCityNames,
//     y: topFiveCityGrowths,
//     type:'bar'
// };

// var data = [trace];
// var layout = {
//     title: 'Most Rapidly Growing Cities',
//     xaxis: {title: 'City'},
//     yaxis: {title: 'Population Growth 2016-2017'}
// };

// // Plotly.newPlot('bar-plot', data, layout);

// d3.json("samples.json").then(function(data){
//     console.log(data);
// });

// d3.json("samples.json").then(function(data){
//     firstPerson = data.metadata[0];
//     Object.entries(firstPerson).forEach(([key, value]) =>
//       {console.log(key + ': ' + value);});
// });

function init() {
    data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16] }];
    Plotly.newPlot("plot", data);
  };
  
  d3.selectAll("#dropdownMenu").on("change", updatePlotly);
  function updatePlotly() {
    var dropdownMenu = d3.select("#dropdownMenu");
    var dataset = dropdownMenu.property("value");
  
    var xData = [1, 2, 3, 4, 5];
    var yData = [];
  
    if (dataset === 'dataset1') {
      yData = [1, 2, 4, 8, 16];
    };
  
    if (dataset === 'dataset2') {
      yData = [1, 10, 100, 1000, 10000];
    };
  
    var trace = {
      x: [xData],
      y: [yData],
    };
    Plotly.restyle("plot", trace);
  };
  
  init();