fetch("http://localhost:3000/description").then(r => {
	return r.json();
}).then(d => {
	//Logic
	//Array Loop => forEach()

	let html = "";
	let aboutus = document.getElementById("description");

	d.forEach(item => {

		html += `<div class="intro">
                    <h1><center>${item.title}</center></h1>
                    <br>
					<p><h3><font face="Monotype Corsiva">${item.para}</font></h3></p>
				</div>`;

	});

	description.innerHTML = html;


})
.catch(e => {
	console.log(e);
})