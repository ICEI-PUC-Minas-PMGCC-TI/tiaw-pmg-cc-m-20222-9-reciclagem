import residentes from "./residentes.json" assert {type: "json"};

function initMap() {
	const directionsService = new google.maps.DirectionsService();
	const directionsRenderer = new google.maps.DirectionsRenderer();
	const map = new google.maps.Map(document.getElementById("map"),
		{
			zoom: 11,
			center: { lat: -19.92332038754276, lng: -43.93934223744971 },
		}
	);

	directionsRenderer.setMap(map);

	(document.getElementById("submit")).addEventListener(
		"click",
		() => {
			calculateAndDisplayRoute(directionsService, directionsRenderer);
		}
	);
}

function calculateAndDisplayRoute(
	directionsService,
	directionsRenderer
) {
	if (document.getElementById('filtro_regiao').value != "") {
		const waypts = [];

		let regioes = residentes["regiao"][0]
		let start
		for (var v1 in regioes) {
			if (v1 == document.getElementById('filtro_regiao').value) {
				console.log(v1);
				let regiao = regioes[v1]["locais"][0]
				for (var v2 in regiao) {
					if (v2 == 0) {
						let lat = regiao[v2]["coords"]["lat"]
						let long = regiao[v2]["coords"]["long"]
						start = new google.maps.LatLng(lat, long)
					}
					else {
						let nome = regiao[v2]["nome"]
						let lat = regiao[v2]["coords"]["lat"]
						let long = regiao[v2]["coords"]["long"]
						waypts.push({
							location: new google.maps.LatLng(lat, long),
							stopover: true,
						});
					}
				}

			}
		}

		directionsService
			.route({
				origin: start,
				destination: start,
				language: 'pt_BR',
				waypoints: waypts,
				optimizeWaypoints: true,
				travelMode: google.maps.TravelMode.WALKING,
			})
			.then((response) => {
				directionsRenderer.setDirections(response);

				const route = response.routes[0];
				const summaryPanel = document.getElementById(
					"directions-panel"
				);
				// summaryPanel.innerHTML = "";
			})
			.catch((e) => window.alert("Directions request failed due to " + e));
	}
}

window.initMap = initMap;
export { };