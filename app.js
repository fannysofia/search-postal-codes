// window.onload fires when the document's window (HTML page) is ready for presentation
window.onload = loadPlaces();
document.getElementById('places-dropdown').addEventListener('click', getSelectValue);

function loadPlaces(){
  let dropdown = document.getElementById('places-dropdown'); // makes dropdown object
  // next four statements add the first row object to dropdown
  let defaultOption = document.createElement('option');  // makes option object
  defaultOption.text = 'Choose Location';                   // changes option object
  defaultOption.value = '';
  dropdown.add(defaultOption);                        // adds option to the dropdown
  // chooses the first row of the dropdown object
  dropdown.selectedIndex = 0;

  const xhrObject = new XMLHttpRequest();
  let url = 'postalcodes.json';
  xhrObject.open('GET', url, true);

  xhrObject.onload = function() {
      console.log(xhrObject.responseURL);
  if (xhrObject.status === 200) {
    const JSONdataObject = JSON.parse(xhrObject.responseText);
    console.log(JSONdataObject);
    let option;
    for (let i = 0; i < JSONdataObject.length; i++) {
      // next four statements add one row object to dropdown
      option = document.createElement('option');   // makes option object ( a row)
      option.text = JSONdataObject[i].postitoimipaikka;        // changes option object
      option.value = JSONdataObject[i].postino;
      dropdown.add(option);		    // adds option to the dropdown

    }
  }
}

xhrObject.onerror = function() {
  console.error('An error occurred fetching the JSON from ' + url);
};
xhrObject.send();
}
function getSelectValue()
{
    var selectedValue = document.getElementById("places-dropdown").value;
    document.getElementById("abbrevation").value = selectedValue;

}
