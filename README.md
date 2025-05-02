# Culture Owl Map Application

An interactive web application for exploring cultural locations across Florida, including museums, attractions, and historic homes.

## Features

- Interactive Google Maps integration
- Categorized locations (Museums, Attractions, Historic Homes)
- Search functionality with real-time filtering
- Responsive design for mobile and desktop
- Location details with website links and directions
- Custom markers with category-specific colors and icons
- Collapsible sidebar for better map viewing
- Zoom controls with retina display support

## Project Structure

```
culture-owl-map/
├── index.html          # Main HTML file
├── styles/
│   └── style.css       # Styles for the application
├── js/
│   └── config.js         # Logic and map functionality
├── images/            # Icons and images
│   ├── historic.png
│   ├── attractions.png
│   └── building-library.svg
└── map-museums.json   # Location data
```

## Setup

1. Clone the repository:
```bash
git clone https://github.com/goldstein18/cultureowl2.git
```


3. Serve the application using a local web server:



4. Open your browser and navigate to `http://localhost:8000`

## Location Data Format

The `data.js` file contains an array of location objects with the following structure:

```json
{
  "name": "Location Name",
  "cclass": "museum|attraction|historic",
  "address": "Street Address",
  "address2": "City, State ZIP",
  "position": {
    "lat": 27.6648,
    "lng": -81.5158
  },
  "image": "path/to/icon.png",
  "link": "https://website.com"
}
```

## Styling

The application uses a modern, clean design with:
- Consistent spacing and typography
- Smooth transitions and animations
- Category-specific colors:
  - Museums: #29bad9 (Blue)
  - Attractions: #8adc9a (Green)
  - Historic Homes: #9b6b9e (Purple)

## Browser Support

The application supports modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

Mobile browsers are also supported with a responsive design that adapts to different screen sizes.

## Development

### Adding New Features

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Code Style

- Use consistent indentation (2 spaces)
- Follow JavaScript ES6+ conventions
- Keep functions small and focused
- Comment complex logic
- Use semantic HTML elements

## Performance Considerations

- CSS transitions use transform and opacity
- Event listeners are properly managed
- Map markers use canvas for better performance
- Lazy loading of location data

## Security

- API keys should be restricted to specific domains
- HTTPS is required for production
- No sensitive data is stored client-side

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please contact:
- Email: mikegoldstein100@gmail.com
- Website: https://goldsteinsystems.com

## Acknowledgments

- Google Maps JavaScript API
- Icons from Heroicons
- Font system from Google Fonts