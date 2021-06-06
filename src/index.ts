import { User } from './User';
import { Company } from './Company';

let delay = 4000;

setTimeout(
    function initMap() {
    
        const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 1,
            center: {
               lat: 0,
               lng: 0
            }
        });
    
        if (google == undefined) {
            initMap();
            console.log("ran")
        }
    }, delay);