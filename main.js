function ToDark() {
	let root = document.querySelector(":root");
	if (!root.classList.contains("dark")) {
		root.classList.add("dark");
	}
}

function ToLight() {
	let root = document.querySelector(":root");
	if (root.classList.contains("dark")) {
		root.classList.remove("dark");
	}
}

function IsDark() {
	return document.querySelector(":root").classList.contains("dark");
}

window.onload = function() {
	document.getElementById("themeSwitch").onclick = function(e) {
		e.preventDefault();
		if (IsDark()) {
			ToLight();
		} else {
			ToDark();
		}
	}

	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
		if (event.matches) {
			if (!IsDark()) {
				ToDark();
			}
		} else {
			if (IsDark()) {
				ToLight();
			}
		}
	});

	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		if (!IsDark()) {
			ToDark();
		}
	}
}
