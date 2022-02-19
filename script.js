const container = document.querySelector(".container");

async function getData() {
	var outline = "";
	const res = await fetch("https://restcountries.com/v3.1/all");
	const data = await res.json();

	data.forEach(
		(item) =>
			(outline += `
      <div class="content">
			<div class="flag">
			  <img src="${item.flags.png}" alt="" />
			</div>
			<div class="country hide">${item.name.common}</div>
			<div class="capital hide">${item.capital}</div>
      </div>
      `)
	);

	container.innerHTML = outline;
}

getData();
