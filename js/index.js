const productId = new URLSearchParams(window.location.search).get("city");

document.addEventListener("DOMContentLoaded", function () {
	if (!productId) {
		const h1 = document.createElement("h1");
		h1.textContent = "Missing ID parameter";
		document.body.appendChild(h1);
	} else {
		fetch("./json/cities.json")
			.then((response) => response.json())
			.then((data) => {
				const city = data.hasOwnProperty(productId) ? data[productId] : null;
				if (city) {
					const h1 = document.createElement("h1");
					h1.textContent = city.productId;
					document.body.appendChild(h1);

                    const postalCodes = city.postal_codes.join(",");
					const enabled = city.enabled;

					const p = document.createElement("p");
					p.textContent = `Postal Codes: ${postalCodes}`;
					document.body.appendChild(p);

					const p2 = document.createElement("p");
					p2.textContent = `Enabled: ${enabled}`;
					document.body.appendChild(p2);
				} else {
					// Code to handle when the productId is not found
					const h1 = document.createElement("h1");
					h1.textContent = "ID doesn't exist";
					document.body.appendChild(h1);
				}
			})
			.catch((error) => {
				// Code to handle any error that occurs during the fetch request
				console.error("Error:", error);
			});
	}
});
