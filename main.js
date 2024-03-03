window.onload = function() {
	let root = document.querySelector(":root");
	document.getElementById("themeSwitch").onclick = function(e) {
		e.preventDefault();
		if (root.classList.contains("dark")) {
			root.classList.remove("dark");
		} else {
			root.classList.add("dark");
		}
	}

	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
		if (event.matches) {
			if (!root.classList.contains("dark")) {
				root.classList.add("dark");
			}
		} else {
			if (root.classList.contains("dark")) {
				root.classList.remove("dark");
			}
		}
	});

	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		root.classList.add("dark");
	}
}
