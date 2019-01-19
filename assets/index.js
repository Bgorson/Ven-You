var URL= 'https://www.eventbriteapi.com/v3/events/search/?q=music&location.address=Chicago&token=TPQYCAU53IO2TT2FQOOY'


$.ajax({
    url: URL,
    method: "GET"
  }).then(function(response) {
      console.log(response)
    // Create a new table row element
    for (i=0;i<response.events.length;i++){
        
    var tRow = $("<tr>");

    // Methods run on jQuery selectors return the selector they we run on
    // This is why we can create and save a reference to a td in the same statement we update its text
    var Tab1 = $("<td>").text(response.events[i].name.text);
      
    // Append the newly created table data to the table row
    tRow.append(Tab1);
    // Append the table row to the table body
    $("tbody").append(tRow);
    }
  });