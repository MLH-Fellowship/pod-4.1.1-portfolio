function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 2,
      center: { lat: 28.6139, lng: 77.2090 },
    });
  
    const tourStops = [
      [{ lat: 28.6139, lng: 77.2090 }, "New Delhi, India"],
      [{ lat: -22.9068, lng: -43.1729 }, "Rio de Janeiro, Brazil"],
      [{ lat: 33.6844, lng: 73.0479 }, "Islamabad, Pakistan"],
      [{ lat: 12.9165, lng: 79.1325 }, "Vellore, India"],
    ];

    // Create an info window to share between markers.
    const infoWindow = new google.maps.InfoWindow();
  
    // Create the markers.
    tourStops.forEach(([position, title], i) => {
      const marker = new google.maps.Marker({
        position,
        map,
        title: `${i + 1}. ${title}`,
        label: `${i + 1}`,
        optimized: false,
      });
  
      marker.addListener("click", () => {
        infoWindow.close();
        infoWindow.setContent(marker.getTitle());
        infoWindow.open(marker.getMap(), marker);
      });
    });
  }