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


// Global variables
let map;
let markers = new Map();
let infoWindows = new Map();
let activeCategory = null;

/**
 * Initialize the map and application
 */

function initMap() {
    // Set initial zoom level based on screen size
    const isMobile = window.innerWidth <= 768;
    const initialZoom = isMobile ? 7 : 7;

    // Move toggle button based on screen size
    const toggleButton = document.getElementById('toggle-sidebar');
    const sidebar = document.getElementById('sidebar');
    const mapContainer = document.getElementById('map-container');
    
    function updateToggleButtonPosition() {
        if (window.innerWidth <= 768) {
            sidebar.appendChild(toggleButton);
        } else {
            mapContainer.insertBefore(toggleButton, document.getElementById('map'));
        }
    }
    
    // Initial position
    updateToggleButtonPosition();
    
    // Update position on resize
    window.addEventListener('resize', updateToggleButtonPosition);


    // Initialize Google Map

    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 27.6648, lng: -81.5158 },
        zoom: initialZoom,
        gestureHandling: 'greedy',
        disableDoubleClickZoom: true,
        scrollwheel: true,
        draggable: true,
        draggableCursor: 'pointer',
        draggingCursor: 'grabbing',
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        keyboardShortcuts: false,
        styles: [
            {
                featureType: "poi",
                elementType: "labels",
                stylers: [{ visibility: "off" }]
            },
            {
                featureType: "poi",
                elementType: "geometry",
                stylers: [{ visibility: "off" }]
            }
        ]
    });

    // Add custom zoom controls
    const zoomControls = document.createElement('div');
    zoomControls.className = 'zoom-controls';
    
    const zoomInButton = document.createElement('button');
    zoomInButton.className = 'zoom-button';
    zoomInButton.innerHTML = '+';
    zoomInButton.addEventListener('click', () => {
        map.setZoom(map.getZoom() + 1);
    });
    
    const zoomOutButton = document.createElement('button');
    zoomOutButton.className = 'zoom-button';
    zoomOutButton.innerHTML = '−';
    zoomOutButton.addEventListener('click', () => {
        map.setZoom(map.getZoom() - 1);
    });
    
    zoomControls.appendChild(zoomInButton);
    zoomControls.appendChild(zoomOutButton);
    document.getElementById('map').appendChild(zoomControls);

    // Add touch event listeners for better mobile interaction
    map.addListener('mousedown', function() {
        map.setOptions({draggable: true});
    });

    map.addListener('mouseup', function() {
        map.setOptions({draggable: true});
    });

    // Add resize listener to adjust zoom on orientation changes
    window.addEventListener('resize', () => {
        const isMobileNow = window.innerWidth <= 768;
        map.setZoom(isMobileNow ? 12 : 7);
    });

    // Add sidebar toggle functionality
    toggleButton.addEventListener('click', () => {
        sidebar.classList.toggle('hidden');
    });

    createCategories();
    createMarkers();
}

function createCategories() {
    const categoriesList = document.getElementById('categories-list');
    const searchResults = document.querySelector('.search-results');
    categoriesList.innerHTML = '';

    // Sort locations for display only
    const sortedLocations = [...locations].sort((a, b) => a.name.localeCompare(b.name));

    const categories = {
        museum: {
            name: 'Museums',
            icon: '<img src="images/building-library.svg" width="24" height="24" alt="Museum Icon" class="micon">',
            locations: sortedLocations.filter(loc => loc.cclass === 'museum')
        },
        attraction: {
            name: 'Attractions',
            icon: '<img src="/images/attractions.png" width="24" height="24" alt="Attraction Icon" class="aicon">',
            locations: sortedLocations.filter(loc => loc.cclass === 'attraction')
        },
        historic: {
            name: 'Historic Homes',
            icon: '<img src="images/historic.png" width="24" height="24" alt="Historic Home Icon" class="micon">',
            locations: sortedLocations.filter(loc => loc.cclass === 'historic')
        }
    };

    // Add search functionality
    const searchInput = document.querySelector('.search-input');
    const clearIcon = document.querySelector('.clear-icon');
    
    clearIcon.addEventListener('click', () => {
        searchInput.value = '';
        searchResults.classList.remove('active');
        categoriesList.style.display = 'block';
        showAllMarkers();
    });

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        if (searchTerm.length > 0) {
            // Show search results
            searchResults.classList.add('active');
            categoriesList.style.display = 'none';
            
            // Filter and display search results
            const filteredLocations = sortedLocations.filter(loc => 
                loc.name.toLowerCase().includes(searchTerm)
            );
            
            if (filteredLocations.length > 0) {
                searchResults.innerHTML = filteredLocations.map(location => `
                    <div class="search-result-item" data-name="${location.name}">
                        <img src="${location.image}" class="search-result-icon" alt="${location.cclass}">
                        <div class="search-result-content">
                            <div class="search-result-name">${location.name}</div>
                            <div class="search-result-category">${location.cclass}</div>
                            <div class="search-result-address">${location.address}, ${location.address2}</div>
                        </div>
                    </div>
                `).join('');

                // Add click handlers to search results
                searchResults.querySelectorAll('.search-result-item').forEach(item => {
                    item.addEventListener('click', () => {
                        const locationName = item.dataset.name;
                        const marker = markers.get(locationName);
                        const infoWindow = infoWindows.get(locationName);
                        if (marker && infoWindow) {
                            map.setZoom(10);
                            map.panTo(marker.getPosition());
                            infoWindows.forEach(iw => iw.close());
                            infoWindow.open(map, marker);
                        }
                    });
                });
            } else {
                searchResults.innerHTML = '<div class="no-results">No results found</div>';
            }

            // Update marker visibility
            markers.forEach((marker, locationName) => {
                const location = locations.find(loc => loc.name === locationName);
                const shouldShow = location && location.name.toLowerCase().includes(searchTerm);
                marker.setVisible(shouldShow);
            });
        } else {
            // Hide search results and show categories
            searchResults.classList.remove('active');
            categoriesList.style.display = 'block';
            showAllMarkers();
        }
    });

    Object.entries(categories).forEach(([key, category]) => {
        const categoryHeader = document.createElement('div');
        categoryHeader.className = 'category-header';
        categoryHeader.setAttribute('data-category', key);
        categoryHeader.innerHTML = `
            <span>${category.icon}</span>
            <span>${category.name} (${category.locations.length})</span>
            <svg class="dropdown-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
            </svg>
        `;
        
        const categoryContent = document.createElement('div');
        categoryContent.className = 'category-content';
        categoryContent.id = `category-${key}`;
        categoryContent.setAttribute('data-category', key);

        categoryHeader.addEventListener('click', () => {
            if (activeCategory === key) {
                categoryContent.classList.remove('expanded');
                categoryHeader.classList.remove('expanded');
                activeCategory = null;
                showAllMarkers();
            } else {
                document.querySelectorAll('.category-content').forEach(content => {
                    content.classList.remove('expanded');
                });
                document.querySelectorAll('.category-header').forEach(header => {
                    header.classList.remove('expanded');
                });
                categoryContent.classList.add('expanded');
                categoryHeader.classList.add('expanded');
                activeCategory = key;
                filterMarkersByCategory(key);
            }
        });

        categoriesList.appendChild(categoryHeader);
        categoriesList.appendChild(categoryContent);

        // Add sorted locations to the category content
        category.locations.forEach(location => {
            const locationItem = document.createElement('div');
            locationItem.className = `location-item cclass-${location.cclass}`;
            locationItem.dataset.name = location.name;
            
            const nameContainer = document.createElement('div');
            nameContainer.style.display = 'flex';
            nameContainer.style.alignItems = 'center';
            nameContainer.style.gap = '10px';
            
            const icon = document.createElement('img');
            // Use the historic category icon for all historic locations
            if (location.cclass === 'historic') {
                icon.src = 'images/historic.png';
            } else {
                icon.src = location.image;
            }
            icon.style.width = '24px';
            icon.style.height = '24px';
            icon.style.objectFit = 'contain';
            icon.style.filter = 'brightness(0) invert(1)';  // Make all icons white in sidebar
            nameContainer.appendChild(icon);
            
            const name = document.createElement('div');
            name.className = 'location-name';
            name.textContent = location.name;
            nameContainer.appendChild(name);
            
            locationItem.appendChild(nameContainer);
            
            if (location.address) {
                const address = document.createElement('a');
                address.className = 'location-address';
                address.textContent = location.address;
                address.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address + ', ' + location.address2)}`;
                address.target = '_blank';
                address.style.textDecoration = 'underline';
                address.style.color = '#666';
                locationItem.appendChild(address);
            }
            
            locationItem.addEventListener('click', () => {
                const marker = markers.get(location.name);
                const infoWindow = infoWindows.get(location.name);
                map.setZoom(10);
                map.panTo(marker.getPosition());
                infoWindows.forEach(iw => iw.close());
                infoWindow.open(map, marker);
            });
            
            categoryContent.appendChild(locationItem);
        });
    });
}

/**
 * Filter markers by category
 */

function filterMarkersByCategory(category) {
    markers.forEach((marker, locationName) => {
        const location = locations.find(loc => loc.name === locationName);
        const shouldShow = location && location.cclass === category;
        marker.setVisible(shouldShow);
        
        const sidebarItem = document.querySelector(`.location-item[data-name="${locationName}"]`);
        if (sidebarItem) {
            sidebarItem.style.display = shouldShow ? 'block' : 'none';
        }
    });
}

/**
 * Show all markers on the map
 */

function showAllMarkers() {
    markers.forEach(marker => {
        marker.setVisible(true);
    });
    document.querySelectorAll('.location-item').forEach(item => {
        item.style.display = 'block';
    });
}

/**
 * Create a single marker for a location
 */

function createMarkers() {
    locations.forEach((location) => {
        // Create a canvas element for the custom marker with higher resolution
        const canvas = document.createElement('canvas');
        const scale = 2; // Scale factor for retina displays
        canvas.width = 40 * scale;
        canvas.height = 40 * scale;
        const ctx = canvas.getContext('2d');
        ctx.scale(scale, scale); // Scale the context

        // Draw the background circle
        ctx.beginPath();
        ctx.arc(20, 20, 20, 0, 2 * Math.PI);
        ctx.fillStyle = location.cclass === 'museum' ? '#29bad9' : 
                      location.cclass === 'historic' ? '#9b6b9e' : '#8adc9a';
        ctx.fill();

        // Draw the icon
        const img = new Image();
        // Use historic icon for historic locations
        img.src = location.cclass === 'historic' ? 'images/historic.png' : location.image;
        img.onload = () => {
            // Create a temporary canvas for the icon with higher resolution
            const iconCanvas = document.createElement('canvas');
            iconCanvas.width = 24 * scale;
            iconCanvas.height = 24 * scale;
            const iconCtx = iconCanvas.getContext('2d');
            iconCtx.scale(scale, scale);
            
            // Draw the icon on the temporary canvas at the correct size
            iconCtx.drawImage(img, 0, 0, 24, 24);
            
            // Get the image data
            const imageData = iconCtx.getImageData(0, 0, 24 * scale, 24 * scale);
            const data = imageData.data;
            
            // Make non-transparent pixels white
            for (let i = 0; i < data.length; i += 4) {
                if (data[i + 3] > 0) { // If pixel is not transparent
                    data[i] = 255;     // R
                    data[i + 1] = 255; // G
                    data[i + 2] = 255; // B
                    // Keep original alpha
                }
            }
            
            // Put the modified image data back
            iconCtx.putImageData(imageData, 0, 0);
            
            // Draw the modified icon onto the main canvas at the correct position and size
            ctx.drawImage(iconCanvas, 8, 8, 24, 24);

            const marker = new google.maps.Marker({
                position: location.position,
                map: map,
                title: location.name,
                icon: {
                    url: canvas.toDataURL(),
                    scaledSize: new google.maps.Size(40, 40),
                    anchor: new google.maps.Point(20, 20)
                },
                draggable: location.draggable
            });
            
            const infoWindowContent = document.createElement('div');
            infoWindowContent.className = 'info-window-content';
            
            // Create close button first
            const newCloseButton = document.createElement('button');
            newCloseButton.innerHTML = '×';
            newCloseButton.style.position = 'absolute';
            newCloseButton.style.top = '5px';
            newCloseButton.style.right = '5px';
            newCloseButton.style.width = '32px';
            newCloseButton.style.height = '32px';
            newCloseButton.style.margin = '0';
            newCloseButton.style.padding = '0';
            newCloseButton.style.border = 'none';
            newCloseButton.style.background = 'none';
            newCloseButton.style.fontSize = '24px';
            newCloseButton.style.lineHeight = '32px';
            newCloseButton.style.textAlign = 'center';
            newCloseButton.style.cursor = 'pointer';
            newCloseButton.style.color = '#666';
            newCloseButton.style.zIndex = '1000';
            newCloseButton.onclick = () => infoWindow.close();
            infoWindowContent.appendChild(newCloseButton);
            
            // Create icon container
            const iconContainer = document.createElement('div');
            iconContainer.style.position = 'absolute';
            iconContainer.style.top = '5px';
            iconContainer.style.left = '15px';
            iconContainer.style.zIndex = '1';
            
            const icon = document.createElement('img');
            // Use historic icon for historic locations in info window
            if (location.cclass === 'historic') {
                icon.src = 'images/historic.png';
                icon.style.filter = 'brightness(0)';  // Make black in info window
            } else {
                icon.src = location.image;
                if (location.cclass === 'attraction') {
                    icon.style.filter = 'brightness(0)';  // Make black in info window
                } else if (location.cclass === 'museum') {
                    icon.style.filter = 'brightness(0)';  // Make black in info window
                } else {
                    icon.style.filter = 'brightness(0) invert(1)';
                }
            }
            icon.style.width = '32px';
            icon.style.height = '32px';
            icon.style.objectFit = 'contain';
            iconContainer.appendChild(icon);
            infoWindowContent.appendChild(iconContainer);
            
            const title = document.createElement('div');
            title.className = 'info-window-title';
            title.style.marginTop = '40px';
            title.textContent = location.name;
            infoWindowContent.appendChild(title);
            
            if (location.address) {
                const address = document.createElement('a');
                address.className = 'info-window-address';
                address.textContent = location.address;
                address.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address + ', ' + location.address2)}`;
                address.target = '_blank';
                address.style.textDecoration = 'underline';
                address.style.color = '#666';
                infoWindowContent.appendChild(address);
                
                // Add line break after address
                const br = document.createElement('br');
                infoWindowContent.appendChild(br);
            }
            
            if (location.link) {
                const link = document.createElement('a');
                link.href = location.link;
                link.target = '_blank';
                link.className = 'info-window-link';
                link.textContent = 'Visit Website';
                infoWindowContent.appendChild(link);
            }
            
            const infoWindow = new google.maps.InfoWindow({
                content: infoWindowContent,
                maxWidth: 300,
                pixelOffset: new google.maps.Size(0, 0)
            });
            
            // Add custom close button handling
            infoWindow.addListener('domready', () => {
                const closeButton = document.querySelector('.gm-style-iw button');
                if (closeButton) {
                    closeButton.style.display = 'none';
                }
            });
            
            marker.addListener('click', () => {
                infoWindows.forEach(iw => iw.close());
                infoWindow.open(map, marker);
                map.setZoom(10);
                map.panTo(marker.getPosition());
            });
            
            // Store marker and infoWindow using location name as key
            markers.set(location.name, marker);
            infoWindows.set(location.name, infoWindow);
        };
    });
}
