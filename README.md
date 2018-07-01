Readme File for the Go Mint Frontend Developer Challenge. 

Basic task was to fetch /ticker data from an API endpoint ( coinmarket cap API ) and use that data on two different pages for display and analysis purposes. 

Page 1: Market Overview , url : '/' : 
  This page consists of a table to display the properties of each coin such as their rank, name, proce in usd, market cap etc. 

Page 2 : Liquidity Analysis, url : 'liquidity' : 
  This page consists of a scatter plot chart, with market cap on the y-axis and volume on the x-axis. 
  The charting library used for this task was https://www.npmjs.com/package/react-easy-chart since it was pretty easy to set up and integrate into the app. The library uses d3.js as its base. The chart is interactive in nature, shows a tooltip with the related coin data when you hover over it

By default /ticker endpoint returns top 100 coins. There should be an option to change it by using a select/dropdown with predefined values and those values shold affect the data on both the pages. Meaning if i changed the dropdown value from 50 to 100 the data on the pages should reflect it. 

Shared Components: 
 There are to two shared componets on both pages. 
 Component 1: Header, is used for for the in between navigariont of the two pages. 
 Component 2 : Dropdown, this component was specifically designed to allow the number of coins to be changed. and the result should have reflected on both pages! so if i changed the dropdown value the number total coins on the page wouldve changed. 

 Redux has been used in the app to manage state since it makes alot of things easier. Redux state was used to fetch the ticker data from the api and store it. That store value was then fetched and used on all pages. 