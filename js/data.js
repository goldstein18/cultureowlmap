/**
 * @author Goldstein Systems LTD
 * @license MIT
 *
 * This software is licensed under the MIT License. See the LICENSE file for details.
 */

/**
 * Culture Owl Interactive Map Interface
 * A web-based interactive map system for exploring cultural locations
 */


 const locations = [
    {
        "position": {
            "lat": 24.558376,
            "lng": -81.806977
        },
        "draggable": false,
        "iwopen": false,
        "name": "Key West Museum of Art & History at the Custom House",
        "text": "",
        "link": "https://www.kwahs.org/",
        "times": "",
        "address": "281 Front Street",
        "address2": "MKey West, FL 33040",
        "image": "/images/building-library.svg",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "museum"
    },
    {
        "position": {
            "lat": 25.7859355,
            "lng": -80.1887661
        },
        "draggable": false,
        "iwopen": false,
        "name": "Vizcaya Museum & Gardens",
        "text": "",
        "link": "https://vizcaya.org/",
        "times": "",
        "address": "3251 S Miami Ave",
        "address2": "Miami, FL 33129",
        "image": "/images/historic.png",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "historic"
    },
    {
        "position": {
            "lat": 25.7725316,
            "lng": -80.1343892
        },
        "draggable": false,
        "iwopen": false,
        "name": "The Bass Museum",
        "text": "",
        "link": "https://thebass.org/",
        "times": "",
        "address": "2100 Collins Ave",
        "address2": "Miami Beach, FL 33139",
        "image": "/images/building-library.svg",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "museum"
    },
    {
        "position": {
            "lat": 26.1363719,
            "lng": -80.1069179
        },
        "draggable": false,
        "iwopen": false,
        "name": "Bonnet House Museum & Gardens",
        "text": "",
        "link": "https://www.bonnethouse.org/",
        "times": "",
        "address": "900 N Birch Rd",
        "address2": "Ft Lauderdale, FL 33304",
        "image": "/images/historic.png",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "historic"
    },
    {
        "position": {
            "lat": 24.5620854,
            "lng": -81.795321
        },
        "draggable": false,
        "iwopen": false,
        "name": "The Studio of Key West",
        "text": "",
        "link": "https://tskw.org/",
        "times": "",
        "address": "533 Eaton St.",
        "address2": "Key West, FL 33040",
        "image": "/images/building-library.svg",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "museum"
    },
    {
        "position": {
            "lat": 24.573176,
            "lng": -81.7508607
        },
        "draggable": false,
        "iwopen": false,
        "name": "Key West Tropical & Botanical",
        "text": "",
        "link": "https://www.keywest.garden/",
        "times": "",
        "address": "5210 College Rd",
        "address2": "Key West, FL 33040",
        "image": "/images/attractions.png",
        "icon": {
            "url": "/images/icon-blue.png"
        },
        "cclass": "attraction"
    },
    {
        "position": {
            "lat": 24.9310858,
            "lng": -80.6229967
        },
        "draggable": false,
        "iwopen": false,
        "name": "History of Diving Museum",
        "text": "",
        "link": "https://divingmuseum.org/",
        "times": "",
        "address": "82990 Overseas Hwy",
        "address2": "Islamorada, FL 33036",
        "image": "/images/building-library.svg",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "museum"
    },
    {
        "position": {
            "lat": 24.9201183,
            "lng": -80.6289193
        },
        "draggable": false,
        "iwopen": false,
        "name": "Keys History & Discovery Center",
        "text": "",
        "link": "http://keysdiscovery.com/",
        "times": "",
        "address": "82100 Overseas Hwy",
        "address2": "Islamorada, FL 33036",
        "image": "/images/building-library.svg",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "museum"
    },
    {
        "position": {
            "lat": 25.6157645,
            "lng": -80.3106316
        },
        "draggable": false,
        "iwopen": false,
        "name": "Deering Estate",
        "text": "",
        "link": "https://deeringestate.org/",
        "times": "",
        "address": "16701 SW 72nd Ave",
        "address2": "Miami, FL 33157",
        "image": "/images/attractions.png",
        "icon": {
            "url": "/images/icon-blue.png"
        },
        "cclass": "attraction"
    },
    {
        "position": {
            "lat": 25.7390995,
            "lng": -80.1570148
        },
        "draggable": false,
        "iwopen": false,
        "name": "Virginia Key Beach Park & Trust",
        "text": "",
        "link": "https://virginiakeybeachpark.net/",
        "times": "",
        "address": "400 NW 2nd Ave",
        "address2": "Miami, FL 33128",
        "image": "/images/attractions.png",
        "icon": {
            "url": "/images/icon-blue.png"
        },
        "cclass": "attraction"
    },
    {
        "position": {
            "lat": 25.7725316,
            "lng": -80.1343892
        },
        "draggable": false,
        "iwopen": false,
        "name": "Jewish Museum of Florida",
        "text": "",
        "link": "https://jmof.fiu.edu/",
        "times": "",
        "address": "301 Washington Ave.",
        "address2": "Miami Beach, FL 33139",
        "image": "/images/building-library.svg",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "museum"
    },
    {
        "position": {
            "lat": 25.7832785,
            "lng": -80.1320906
        },
        "draggable": false,
        "iwopen": false,
        "name": "World Erotic Art Museum",
        "text": "",
        "link": "https://www.wilzigmuseumbuilding.com/",
        "times": "",
        "address": "1205 Washington Ave",
        "address2": "Miami Beach, FL 33139",
        "image": "/images/building-library.svg",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "museum"
    },
    {
        "position": {
            "lat": 25.7904703,
            "lng": -80.1325398
        },
        "draggable": false,
        "iwopen": false,
        "name": "FIU Urban Studios (MBUS)",
        "text": "",
        "link": "https://carta.fiu.edu/mbus/",
        "times": "",
        "address": "420 Lincoln Rd",
        "address2": "Miami Beach, FL 33139",
        "image": "/images/building-library.svg",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "museum"
    },
    {
        "position": {
            "lat": 25.7859355,
            "lng": -80.1887661
        },
        "draggable": false,
        "iwopen": false,
        "name": "Pérez Art Museum Miami",
        "text": "",
        "link": "https://www.pamm.org/en/",
        "times": "",
        "address": "1103 Biscayne Blvd",
        "address2": "Miami, FL 33132",
        "image": "/images/building-library.svg",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "museum"
    },
    {
        "position": {
            "lat": 25.7852621,
            "lng": -80.1878898
        },
        "draggable": false,
        "iwopen": false,
        "name": "Frost Museum of Science",
        "text": "",
        "link": "https://www.frostscience.org/",
        "times": "",
        "address": "1101 Biscayne Blvd",
        "address2": "Miami, FL 33132",
        "image": "/images/building-library.svg",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "museum"
    },
    {
        "position": {
            "lat": 25.7803364,
            "lng": -80.1894581
        },
        "draggable": false,
        "iwopen": false,
        "name": "Museum of Art and Design",
        "text": "",
        "link": "https://moadmdc.org/",
        "times": "",
        "address": "600 Biscayne Blvd",
        "address2": "Miami, FL 33132",
        "image": "/images/building-library.svg",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "museum"
    },
    {
        "position": {
            "lat": 25.7537048,
            "lng": -80.3730592
        },
        "draggable": false,
        "iwopen": false,
        "name": "Frost Art Museum",
        "text": "",
        "link": "http://frost.fiu.edu/",
        "times": "",
        "address": "10975 SW 17th St",
        "address2": "Miami, FL 33199",
        "image": "/images/building-library.svg",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "museum"
    },
    {
        "position": {
            "lat": 25.9296854,
            "lng": -80.1571471
        },
        "draggable": false,
        "iwopen": false,
        "name": "The Ancient Spanish Monastery",
        "text": "",
        "link": "http://www.spanishmonastery.com/",
        "times": "",
        "address": "16711 W Dixie Hwy",
        "address2": "North Miami Beach, FL 33160",
        "image": "/images/attractions.png",
        "icon": {
            "url": "/images/icon-blue.png"
        },
        "cclass": "attraction"
    },
    {
        "position": {
            "lat": 26.3180355,
            "lng": -80.1006006
        },
        "draggable": false,
        "iwopen": false,
        "name": "The Deerfield Beach Historical Society",
        "text": "",
        "link": "https://www.deerfieldbeachhistoricalsociety.com/",
        "times": "",
        "address": "380 E Hillsboro Blvd",
        "address2": "Deerfield Beach, FL 33441",
        "image": "/images/attractions.png",
        "icon": {
            "url": "/images/icon-blue.png"
        },
        "cclass": "attraction"
    },
    {
        "position": {
            "lat": 26.3449525,
            "lng": -80.0847098
        },
        "draggable": false,
        "iwopen": false,
        "name": "Children's Science Exploratorium at Sugar Sand Park",
        "text": "",
        "link": "https://www.sugarsandpark.org/science-explorium",
        "times": "",
        "address": "300 S Military Trail",
        "address2": "Boca Raton, FL 33486",
        "image": "/images/attractions.png",
        "icon": {
            "url": "/images/icon-blue.png"
        },
        "cclass": "attraction"
    },
    {
        "position": {
            "lat": 26.3249654,
            "lng": -81.0016251
        },
        "draggable": false,
        "iwopen": false,
        "name": "Ah-Tah-Thi-Ki Museum",
        "text": "",
        "link": "http://www.ahtahthiki.com/",
        "times": "",
        "address": "34725 West Boundary Road",
        "address2": "Clewiston, FL 33440",
        "image": "/images/building-library.svg",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "museum"
    },
    {
        "position": {
            "lat": 26.4628257,
            "lng": -80.0748013
        },
        "draggable": false,
        "iwopen": false,
        "name": "Old School Square",
        "text": "",
        "link": "https://oldschoolsquare.org/",
        "times": "",
        "address": "51 N Swinton Ave",
        "address2": "Delray Beach, FL 33444",
        "image": "/images/building-library.svg",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "museum"
    },
    {
        "position": {
            "lat": 26.7005459,
            "lng": -80.0554191
        },
        "draggable": false,
        "iwopen": false,
        "name": "Yesteryear Village",
        "text": "",
        "link": "https://www.southfloridafair.com/yesteryear-village",
        "times": "",
        "address": "601 7 Sansbury's Way",
        "address2": "West Palm Beach, FL 33411",
        "image": "/images/building-library.svg",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "museum"
    },
    {
        "position": {
            "lat": 26.7005459,
            "lng": -80.0554191
        },
        "draggable": false,
        "iwopen": false,
        "name": "Norton Museum of Art",
        "text": "",
        "link": "https://www.norton.org/",
        "times": "",
        "address": "1451 S Olive Ave",
        "address2": "West Palm Beach, FL 33401",
        "image": "/images/building-library.svg",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "museum"
    },
    {
        "position": {
            "lat": 28.5921751,
            "lng": -81.3462264
        },
        "draggable": false,
        "iwopen": false,
        "name": "Rollins Museum of Art",
        "text": "",
        "link": "https://www.rollins.edu/rma/",
        "times": "",
        "address": "1000 Holt Ave",
        "address2": "Winter Park, FL 32789",
        "image": "/images/building-library.svg",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "museum"
    },
    {
        "position": {
            "lat": 28.0296636,
            "lng": -81.9471287
        },
        "draggable": false,
        "iwopen": false,
        "name": "Frank Lloyd Wright at Florida Southern College",
        "text": "",
        "link": "https://www.flsouthern.edu/frank-lloyd-wright/home.aspx",
        "times": "",
        "address": "111 Lake Hollingsworth Dr",
        "address2": "Lakeland, FL 33801",
        "image": "/images/building-library.svg",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "museum"
    },
    {
        "position": {
            "lat": 28.047411,
            "lng": -82.1877588
        },
        "draggable": false,
        "iwopen": false,
        "name": "Keel Farms",
        "text": "",
        "link": "https://www.keelfarms.com/",
        "times": "",
        "address": "5202 Thonotosassa Rd",
        "address2": "Plant City, FL 33565",
        "image": "/images/attractions.png",
        "icon": {
            "url": "/images/icon-blue.png"
        },
        "cclass": "attraction"
    },
    {
        "position": {
            "lat": 28.0663742,
            "lng": -82.5158884
        },
        "draggable": false,
        "iwopen": false,
        "name": "Carrollwood Cultural Center",
        "text": "",
        "link": "https://carrollwoodcenter.org/",
        "times": "",
        "address": "4537 Lowell Rd",
        "address2": "Tampa, FL 33618",
        "image": "/images/attractions.png",
        "icon": {
            "url": "/images/icon-blue.png"
        },
        "cclass": "attraction"
    },
    {
        "position": {
            "lat": 28.2707177,
            "lng": -82.6871855
        },
        "draggable": false,
        "iwopen": false,
        "name": "M.A.P.S. Museum",
        "text": "",
        "link": "https://www.mapsmuseum.org/",
        "times": "",
        "address": "7650 Orchid Lake Rd",
        "address2": "New Port Richey, FL 34653",
        "image": "/images/building-library.svg",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "museum"
    },
    {
        "position": {
            "lat": 28.0536341,
            "lng": -82.4066075
        },
        "draggable": false,
        "iwopen": false,
        "name": "Museum of Science and Industry",
        "text": "",
        "link": "https://www.mosi.org/",
        "times": "",
        "address": "4801 E Fowler Ave",
        "address2": "Tampa, FL 33617",
        "image": "/images/building-library.svg",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "museum"
    },
    {
        "position": {
            "lat": 27.9443322,
            "lng": -82.4472808
        },
        "draggable": false,
        "iwopen": false,
        "name": "Florida Aquarium",
        "text": "",
        "link": "https://www.flaquarium.org/",
        "times": "",
        "address": "701 Channelside Dr",
        "address2": "Tampa, FL 33602",
        "image": "/images/attractions.png",
        "icon": {
            "url": "/images/icon-blue.png"
        },
        "cclass": "attraction"
    },
    {
        "position": {
            "lat": 27.9495219,
            "lng": -82.464856
        },
        "draggable": false,
        "iwopen": false,
        "name": "Tampa Museum of Art",
        "text": "",
        "link": "https://tampamuseum.org/",
        "times": "",
        "address": "120 W Gasparilla Plaza",
        "address2": "Tampa, FL 33602",
        "image": "/images/building-library.svg",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "museum"
    },
    {
        "position": {
            "lat": 27.9479915,
            "lng": -82.4668943
        },
        "draggable": false,
        "iwopen": false,
        "name": "Henry B. Plant Museum",
        "text": "",
        "link": "http://www.plantmuseum.com/",
        "times": "",
        "address": "401 W Kennedy Blvd",
        "address2": "Tampa, FL 33606",
        "image": "/images/building-library.svg",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "museum"
    },
    {
        "position": {
            "lat": 27.9770782,
            "lng": -82.8282606
        },
        "draggable": false,
        "iwopen": false,
        "name": "Sunsets at Pier 60",
        "text": "",
        "link": "https://www.sunsetsatpier60.com/",
        "times": "",
        "address": "1 Causeway Blvd",
        "address2": "Clearwater Beach, FL 33767",
        "image": "/images/attractions.png",
        "icon": {
            "url": "/images/icon-blue.png"
        },
        "cclass": "attraction"
    },
    {
        "position": {
            "lat": 27.7085214,
            "lng": -82.7372146
        },
        "draggable": false,
        "iwopen": false,
        "name": "Suntan Art Center",
        "text": "",
        "link": "https://www.suntanart.org/",
        "times": "",
        "address": "3300 Gulf Blvd 2nd Floor",
        "address2": "St Pete Beach, FL 33706",
        "image": "/images/attractions.png",
        "icon": {
            "url": "/images/icon-blue.png"
        },
        "cclass": "attraction"
    },
    {
        "position": {
            "lat": 27.7744252,
            "lng": -82.634073
        },
        "draggable": false,
        "iwopen": false,
        "name": "Museum of Fine Arts",
        "text": "",
        "link": "https://mfastpete.org/",
        "times": "",
        "address": "255 Beach Dr NE",
        "address2": "St. Petersburg, FL 33701",
        "image": "/images/building-library.svg",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "museum"
    },
    {
        "position": {
            "lat": 27.7739498,
            "lng": -82.6329334
        },
        "draggable": false,
        "iwopen": false,
        "name": "St. Petersburg Museum of History",
        "text": "",
        "link": "http://spmoh.com/",
        "times": "",
        "address": "335 2nd Ave NE",
        "address2": "St. Petersburg, FL 33701",
        "image": "/images/building-library.svg",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "museum"
    },
    {
        "position": {
            "lat": 27.7707801,
            "lng": -82.6369282
        },
        "draggable": false,
        "iwopen": false,
        "name": "James Museum",
        "text": "",
        "link": "https://thejamesmuseum.org/",
        "times": "",
        "address": "150 Central Ave",
        "address2": "St. Petersburg, FL 33701",
        "image": "/images/building-library.svg",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "museum"
    },
    {
        "position": {
            "lat": 27.7705548,
            "lng": -82.6427255
        },
        "draggable": false,
        "iwopen": false,
        "name": "Florida Holocaust Museum",
        "text": "",
        "link": "https://www.flholocaustmuseum.org/",
        "times": "",
        "address": "55 5th St S",
        "address2": "St. Petersburg, FL 33701",
        "image": "/images/building-library.svg",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "museum"
    },
    {
        "position": {
            "lat": 27.7659086,
            "lng": -82.6315789
        },
        "draggable": false,
        "iwopen": false,
        "name": "The Dalí",
        "text": "",
        "link": "https://thedali.org/",
        "times": "",
        "address": "1 Dali Blvd",
        "address2": "St. Petersburg, FL 33701",
        "image": "/images/building-library.svg",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "museum"
    },
    {
        "position": {
            "lat": 27.382924,
            "lng": -82.5667465
        },
        "draggable": false,
        "iwopen": false,
        "name": "The Ringling",
        "text": "",
        "link": "https://www.ringling.org/",
        "times": "",
        "address": "5401 Bay Shore Rd",
        "address2": "Sarasota, FL 34243",
        "image": "/images/building-library.svg",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "museum"
    },
    {
        "position": {
            "lat": 27.3259066,
            "lng": -82.5314687
        },
        "draggable": false,
        "iwopen": false,
        "name": "Sarasota Art Museum",
        "text": "",
        "link": "https://www.sarasotaartmuseum.org/",
        "times": "",
        "address": "1001 S Tamiami Trail",
        "address2": "Sarasota, FL 34236",
        "image": "/images/building-library.svg",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "museum"
    },
    {
        "position": {
            "lat": 27.3846512,
            "lng": -82.4547981
        },
        "draggable": false,
        "iwopen": false,
        "name": "Circus Sarasota",
        "text": "",
        "link": "https://circusarts.org/",
        "times": "",
        "address": "140 University Town Center Dr",
        "address2": "Sarasota, FL 34243",
        "image": "/images/attractions.png",
        "icon": {
            "url": "/images/icon-blue.png"
        },
        "cclass": "attraction"
    },
    {
        "position": {
            "lat": 33.7739283,
            "lng": -84.3280231
        },
        "draggable": false,
        "iwopen": false,
        "name": "Fernbank Museum",
        "text": "",
        "link": "https://fernbankmuseum.org/",
        "times": "",
        "address": "767 Clifton Rd",
        "address2": "Atlanta, GA 30307",
        "image": "/images/building-library.svg",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "museum"
    },
    {
        "position": {
            "lat": 33.7899568,
            "lng": -84.3725988
        },
        "draggable": false,
        "iwopen": false,
        "name": "Atlanta Botanical Garden",
        "text": "",
        "link": "http://www.atlantabg.org/",
        "times": "",
        "address": "1345 Piedmont Ave NE",
        "address2": "Atlanta, GA 30309",
        "image": "/images/attractions.png",
        "icon": {
            "url": "/images/icon-blue.png"
        },
        "cclass": "attraction"
    },
    {
        "position": {
            "lat": 33.763382,
            "lng": -84.3973038
        },
        "draggable": false,
        "iwopen": false,
        "name": "Georgia Aquarium",
        "text": "",
        "link": "https://www.georgiaaquarium.org/",
        "times": "",
        "address": "225 Baker St NW",
        "address2": "Atlanta, GA 30313",
        "image": "/images/attractions.png",
        "icon": {
            "url": "/images/icon-blue.png"
        },
        "cclass": "attraction"
    },
    {
        "position": {
            "lat": 33.7900676,
            "lng": -84.3877407
        },
        "draggable": false,
        "iwopen": false,
        "name": "High Museum of Art",
        "text": "",
        "link": "http://www.high.org/",
        "times": "",
        "address": "1280 Peachtree St NE",
        "address2": "Atlanta, GA 30309",
        "image": "/images/building-library.svg",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "museum"
    },
    {
        "position": {
            "lat": 33.7625608,
            "lng": -84.39463
        },
        "draggable": false,
        "iwopen": false,
        "name": "World of Coca-Cola",
        "text": "",
        "link": "http://www.worldofcoca-cola.com/",
        "times": "",
        "address": "121 Baker St NW",
        "address2": "Atlanta, GA 30313",
        "image": "/images/attractions.png",
        "icon": {
            "url": "/images/icon-blue.png"
        },
        "cclass": "attraction"
    },
    {
        "position": {
            "lat": 33.7906524,
            "lng": -84.386829
        },
        "draggable": false,
        "iwopen": false,
        "name": "MODA",
        "text": "",
        "link": "http://www.museumofdesign.org/",
        "times": "",
        "address": "1315 Peachtree St NE",
        "address2": "Atlanta, GA 30309",
        "image": "/images/building-library.svg",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "museum"
    },
    {
        "position": {
            "lat": 33.7928756,
            "lng": -84.3898664
        },
        "draggable": false,
        "iwopen": false,
        "name": "Center For Puppetry Arts",
        "text": "",
        "link": "https://puppet.org/",
        "times": "",
        "address": "1404 Spring St NW",
        "address2": "Atlanta, GA 30309",
        "image": "/images/building-library.svg",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "museum"
    },
    {
        "position": {
            "lat": 33.7939272,
            "lng": -84.3899019
        },
        "draggable": false,
        "iwopen": false,
        "name": "The Breman Museum",
        "text": "",
        "link": "https://www.thebreman.org",
        "times": "",
        "address": "1440 Spring St NW",
        "address2": "Atlanta, GA 30309",
        "image": "/images/building-library.svg",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "museum"
    },
    {
        "position": {
            "lat": 33.7966461,
            "lng": -84.3913222
        },
        "draggable": false,
        "iwopen": false,
        "name": "SCAD FASH Museum of Fashion + Film",
        "text": "",
        "link": "https://www.scadfash.org/",
        "times": "",
        "address": "1600 Peachtree Rd NW",
        "address2": "Atlanta, GA 30309",
        "image": "/images/building-library.svg",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "museum"
    },
    {
        "position": {
            "lat": 34.1018037,
            "lng": -84.5199686
        },
        "draggable": false,
        "iwopen": false,
        "name": "Woodstock Cultural Arts Village",
        "text": "",
        "link": "https://woodstockarts.org/",
        "times": "",
        "address": "8534 Main St",
        "address2": "Woodstock, GA 30188",
        "image": "/images/attractions.png",
        "icon": {
            "url": "/images/icon-blue.png"
        },
        "cclass": "attraction"
    },
    {
        "position": {
            "lat": 34.1692855,
            "lng": -84.8180166
        },
        "draggable": false,
        "iwopen": false,
        "name": "Bartow History Museum",
        "text": "",
        "link": "https://bartowhistorymuseum.org/",
        "times": "",
        "address": "4 E Church St",
        "address2": "Cartersville, GA 30120",
        "image": "/images/building-library.svg",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "museum"
    },
    {
        "position": {
            "lat": 34.2085657,
            "lng": -84.79528
        },
        "draggable": false,
        "iwopen": false,
        "name": "Savoy Automobile Museum",
        "text": "",
        "link": "https://savoymuseum.org/",
        "times": "",
        "address": "3 Savoy Ln",
        "address2": "Cartersville, GA 30120",
        "image": "/images/building-library.svg",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "museum"
    },
    {
        "position": {
            "lat": 34.241654,
            "lng": -84.7727098
        },
        "draggable": false,
        "iwopen": false,
        "name": "Tellus Science Museum",
        "text": "",
        "link": "http://www.tellusmuseum.org/",
        "times": "",
        "address": "100 Tellus Dr",
        "address2": "Cartersville, GA 30120",
        "image": "/images/building-library.svg",
        "icon": {
            "url": "/images/icon-red.png"
        },
        "cclass": "museum"
    },
    {
"position": {
    "lat": 26.118462,
    "lng": -80.137490
},
"draggable": false,
"iwopen": false,
"name": "Historic Stranahan House Museum",
"text": "",
"link": "https://stranahanhouse.org/",
"times": "Tours at 1, 2, and 3 p.m. daily (except major holidays)",
"address": "335 SE 6th Avenue",
"address2": "Fort Lauderdale, FL 33301",
"image": "/images/museums/stranahan_house_logo.png",
"icon": {
    "url": "/images/icon-red.png"
},
"cclass": "historic"
},
{
"position": {
    "lat": 24.558376,
    "lng": -81.779987
},
"draggable": false,
"iwopen": false,
"name": "Audubon House & Tropical Gardens",
"text": "",
"link": "https://audubonhouse.org/",
"times": "Open 9:30 AM to 5:00 PM daily",
"address": "205 Whitehead Street",
"address2": "Key West, FL 33040",
"image": "/images/museums/audubon_house_logo.png",
"icon": {
    "url": "/images/icon-red.png"
},
"cclass": "historic"
},
{
"position": {
    "lat": 33.842132,
    "lng": -84.385247
},
"draggable": false,
"iwopen": false,
"name": "Swan House",
"text": "",
"link": "https://www.atlantahistorycenter.com/buildings-and-grounds/swan-house/",
"times": "Open 11 AM to 4 PM (1 PM to 4 PM on Sundays)",
"address": "130 West Paces Ferry Road NW",
"address2": "Atlanta, GA 30305",
"image": "/images/museums/swan_house_logo.png",
"icon": {
    "url": "/images/icon-red.png"
},
"cclass": "historic"
},
{
"position": {
    "lat": 29.021984,
    "lng": -81.301892
},
"draggable": false,
"iwopen": false,
"name": "Stetson Mansion",
"text": "",
"link": "https://www.stetsonmansion.com/",
"times": "Christmas Tours Nov-Jan, Historic Tours Feb-May",
"address": "1031 Camphor Lane",
"address2": "DeLand, FL 32720",
"image": "/images/museums/stetson_mansion_logo.png",
"icon": {
    "url": "/images/icon-red.png"
},
"cclass": "historic"
},
{
"position": {
    "lat": 33.738211,
    "lng": -84.422042
},
"draggable": false,
"iwopen": false,
"name": "The Wren's Nest",
"text": "",
"link": "https://www.wrensnest.org/",
"times": "Open Saturdays 11:00 AM to 3:00 PM",
"address": "1050 Ralph David Abernathy Blvd SW",
"address2": "Atlanta, GA 30310",
"image": "/images/museums/wrens_nest_logo.png",
"icon": {
    "url": "/images/icon-red.png"
},
"cclass": "historic"
},
{
"position": {
    "lat": 33.756518,
    "lng": -84.392106
},
"draggable": false,
"iwopen": false,
"name": "LP Grant Mansion",
"text": "",
"link": "https://www.atlantapreservationcenter.com/our-location",
"times": "Tours by appointment",
"address": "327 St. Paul Avenue SE",
"address2": "Atlanta, GA 30312",
"image": "/images/museums/grant_mansion_logo.png",
"icon": {
    "url": "/images/icon-red.png"
},
"cclass": "historic"
},
{
"position": {
    "lat": 33.781422,
    "lng": -84.388760
},
"draggable": false,
"iwopen": false,
"name": "Rhodes Hall",
"text": "",
"link": "https://rhodeshall.org/",
"times": "Tours on Saturdays 10 AM to 2 PM",
"address": "1516 Peachtree Street NW",
"address2": "Atlanta, GA 30309",
"image": "/images/museums/rhodes_hall_logo.png",
"icon": {
    "url": "/images/icon-red.png"
},
"cclass": "historic"
},
{
"position": {
    "lat": 33.447334,
    "lng": -84.146858
},
"draggable": false,
"iwopen": false,
"name": "Historic Hampton House",
"text": "",
"link": "https://www.historichamptonhouse.org/",
"times": "Contact for tour hours",
"address": "345 Rosenwald Drive",
"address2": "McDonough, GA 30253",
"image": "/images/museums/hampton_house_logo.png",
"icon": {
    "url": "/images/icon-red.png"
},
"cclass": "historic"
},
{
"position": {
    "lat": 25.783305,
    "lng": -80.199432
},
"draggable": false,
"iwopen": false,
"name": "Dana A. Dorsey House",
"text": "",
"link": "http://www.historicpreservationmiami.com/dorseyhouse.html",
"times": "By appointment only",
"address": "250 Northwest 9th Street",
"address2": "Miami, FL 33136",
"image": "/images/museums/dorsey_house_logo.png",
"icon": {
    "url": "/images/icon-red.png"
},
"cclass": "historic"
},
{
"position": {
    "lat": 33.764419,
    "lng": -84.412803
},
"draggable": false,
"iwopen": false,
"name": "Herndon Home",
"text": "",
"link": "http://www.herndonhome.org/",
"times": "Tuesday and Thursday 10 AM to 4 PM",
"address": "587 University Place NW",
"address2": "Atlanta, GA 30314",
"image": "/images/museums/herndon_home_logo.png",
"icon": {
    "url": "/images/icon-red.png"
},
"cclass": "historic"
},
{
"position": {
    "lat": 26.279722,
    "lng": -80.125556
},
"draggable": false,
"iwopen": false,
"name": "Sample-McDougald House",
"text": "",
"link": "https://www.samplemcdougald.org/",
"times": "Tours by appointment",
"address": "450 Northeast 10th Street",
"address2": "Pompano Beach, FL 33060",
"image": "/images/museums/sample_mcdougald_logo.png",
"icon": {
    "url": "/images/icon-red.png"
},
"cclass": "historic"
},
{
"position": {
    "lat": 32.075278,
    "lng": -81.093333
},
"draggable": false,
"iwopen": false,
"name": "Owens-Thomas House & Slave Quarters",
"text": "",
"link": "https://www.telfair.org/visit/owens-thomas/",
"times": "Tours at 15-minute intervals, last tour at 4 PM",
"address": "124 Abercorn Street",
"address2": "Savannah, GA 31401",
"image": "/images/museums/owens_thomas_logo.png",
"icon": {
    "url": "/images/icon-red.png"
},
"cclass": "historic"
},
{
"position": {
    "lat": 33.844722,
    "lng": -84.385556
},
"draggable": false,
"iwopen": false,
"name": "Villa Lamar",
"text": "",
"link": "https://buckheadheritage.com/villa-lamar/",
"times": "Private residence, not open to public",
"address": "801 West Paces Ferry Road",
"address2": "Atlanta, GA 30327",
"image": "/images/museums/villa_lamar_logo.png",
"icon": {
    "url": "/images/icon-red.png"
},
"cclass": "historic"
},
{
"position": {
    "lat": 33.769444,
    "lng": -84.375833
},
"draggable": false,
"iwopen": false,
"name": "SCAD Ivy Hall",
"text": "",
"link": "https://www.scad.edu/life/buildings-and-facilities/scad-ivy-hall",
"times": "Tours by appointment, Fridays 10 AM to 2 PM",
"address": "179 Ponce de Leon Avenue NE",
"address2": "Atlanta, GA 30308",
"image": "/images/museums/scad_ivy_hall_logo.png",
"icon": {
    "url": "/images/icon-red.png"
},
"cclass": "historic"
},
{
"position": {
    "lat": 26.116197,
    "lng": -80.145530
},
"draggable": false,
"iwopen": false,
"name": "History Fort Lauderdale",
"text": "",
"link": "https://historyfortlauderdale.org/",
"times": "Open daily 10 AM to 4 PM, guided tours at 1, 2, and 3 PM",
"address": "231 SW 2nd Avenue",
"address2": "Fort Lauderdale, FL 33301",
"image": "/images/museums/history_fort_lauderdale_logo.png",
"icon": {
    "url": "/images/icon-red.png"
},
"cclass": "historic"
}
];