// from data.js
const tableData = data;

// table references
const tbody = d3.select("tbody");

function buildTable(data) {
  // clear existing data
  tbody.html("");

  // loop through each object in data
  // append row and cells 
  data.forEach((dataRow) => {
    // Append a row to the table body
    const row = tbody.append("tr");

    // Loop through field in the dataRow, addthe value, and then show it as a table cell 
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

function handleClick() {

  // Through the filter we get the datetime value
  const date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  // Rebuild the table using the filtered data and if no date was entered, then filter will be the OG dataa.
  buildTable(filteredData);
}

// Event to listen for the button about form
d3.selectAll("#filter-btn").on("click", handleClick);

// When page loads, build the table
buildTable(tableData);
