const apiURL = "https://spreadsheets.google.com/feeds/list/1YDBX2rLkCjG4DupcdaFx-3ygc30jdh-b_I_6oKptT2E/od6/public/values?alt=json"

const tableHeader = [
    'contactnumber', 
    'state',
    'locationcity',
    'availibility', 
    'link', 
    'status',
    'dateandtimeofverificationautomateddonotedit' , 
    'price',
    'cylinder',
    'cans',
    'refill',
    'additionalinfo',
    'rank'
];

fetch(apiURL)
// return promise
.then(res=> res.json())
// parsing data in json
.then(data => {
    mainJson = data.feed.entry; // extracting data from the api response
    mainJson.forEach(rowData => {  // running loop for each row
        title = rowData.title.$t        // Dhoondh
        content = rowData.content.$t    // link:dhoondh.com
        addRow(title, content)          // adding data to interface
    });
})

function addRow(title, content) {
    let tableArea = document.getElementById('table-area');
    let rowElement = document.createElement('tr')
    let rowHeader = document.createElement('th')
    let rowData = document.createElement('td')
    rowHeader.innerText = title
    rowElement.appendChild(rowHeader)
    
    // content > contactnumber: 26612730, availibility: BUSY/RINGING, link: BLOOD DONATION ORG, location: Bangalore; Karnataka , timedateverified: 1:20PM; 27Apr
    let formattedData = content.split(', ') // converting to array using commas
    
    // creating hasmap to store contents
    let hash = {}
    formattedData.forEach(rowData => {
        let keyPair = rowData.split(': ');  // converting to array using colon
        // [contactnumber, 26612730]
        hash[keyPair[0]] = keyPair[1]       // making key value pairs
        // {
        //     contactnumber: 26612730
        // }
    });

    tableHeader.forEach(header => {
        rowData = document.createElement('td')  // creating table-data tag
        // adding text inside table-data tag
        rowData.innerText = hash.hasOwnProperty(header) ? hash[header] : "-"
        // adding data to row
        rowElement.appendChild(rowData)
    })

    tableArea.appendChild(rowElement)
}