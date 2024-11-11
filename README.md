### Oregon Interactive Map

An interactive map of Oregon created with React and Mapbox, featuring animated markers, popups with images, and responsive design for both desktop and mobile views.

This is add on Map for my Oregon Hikes Project.
### Links To Oregon Hikes project and live Site.
- https://oregon-hikes.onrender.com/
- https://github.com/rbrown29/Oregon-Hikes

### Features
- Mapbox Integration: Displays a detailed map with satellite imagery.
- Animated Markers: Markers pulse to draw attention to points of interest.
- Popups with Images: Each marker opens a popup with information and an image of the location. Click the image to view more information. Click on the 3d terrain elevation link to preview the trail.
- Embedding Support: Can be embedded in other websites using an `<iframe>`.

### Installation
1. Clone the repository: `git clone`
2. Install dependencies: `npm install`
3. Create a `.env` file in the root directory with the following content:
```
REACT_APP_MAPBOX_ACCESS_TOKEN=your_mapbox_access_token
```
4. Start the development server: `npm start`
5. Open `http://localhost:3000` in your browser.

### Adding new locations
1. Open OregonMap.js.
2. Add a new entry ib the oregonPlaces array:
```javascript
const oregonPlaces = [
    {
        id: 4,
        name: "New Location",
        latitude: 45.1234,
        longitude: -121.1234,
        imageUrl: "/new-location.jpg"
    },
    // More locations
];

```
3. Add the image to the `public` folder.

### Deployment
1. Build the project: `npm run build`
2. Deploy the contents of the `build` folder to your platform of choice.

### Embedding on a Website
You can embed this app on other websites using an `<iframe>`. After deployment, use the following HTML to embed the map:
```html
<iframe
    src="https://your-deployed-url.com"
    width="100%"
    height="600px"
    style="border:none;"
    allowfullscreen
></iframe>
```

### Technologies Used
- React: JavaScript library for building user interfaces.
- Mapbox GL JS: Interactive maps and spatial data visualization
- React Map GL: React components for Mapbox GL JS
- CSS: Styling and responsive design

### Demo
![Oregon Interactive Map](https://timely-scone-7b792f.netlify.app/)