var map = L.map('map').setView([44.993750, -93.249670], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


//List of coords of the location of E-Waste in acending order
coords = [[44.993750, -93.249670], [45.048180, -93.402910], [44.837770, -93.121050], [44.996760, -93.234620]]

let length = coords.length;




let Elocation = document.querySelector('#location');
let Elocation2 = document.querySelector('#location2');
let Elocation3 = document.querySelector('#location3');
let Elocation4 = document.querySelector('#location4');

locations = [Elocation, Elocation2, Elocation3, Elocation4]

for (let i = 0; i < length; i++){
    var marker = L.marker(coords[i]).addTo(map);

    //zoom into that location
    locations[i].addEventListener('click', ()=> {
        map.flyTo(coords[i], 12);
    });
}