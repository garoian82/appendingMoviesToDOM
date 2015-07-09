




var movies = [
    ["something about mary", 90, 1990],
    ["tombstone", 85, 1983],
    ["driving miss daisy", 95, 1985],
    ["the shining", 90, 1987],
    ["taxi driver", 120, 2005],
    ["ted", 120, 2012],
    ["burn it down", 50, 2007],
    ["space odyssey", 79, 1987],
    ["father of the bride", 90, 1996],
    ["jurassic world", 140, 2015]
];


function e(elementType, text, attributes, styles, selector) {
	var newElement = document.createElement(elementType);

	newElement.textContent = text;

	for (attribute in attributes) {
		if(attributes.hasOwnProperty(attribute)) {
			newElement.setAttribute(attribute, attributes[attribute]);
		}
	}

	for (style in styles) {
		if (styles.hasOwnProperty(style)) {
			newElement.style[style] = styles[style];
		}
	}

	var container = document.querySelector(selector);
	if (container) {
		container.appendChild(newElement);
	}

	return newElement;
}

e('ul', null, {'id': 'movieLi'}, {'color': 'green'}, 'body');

for (var i = 0; i < movies.length; i++) {
	e('li', [movies[i][0]], {'id': 'movie' + i}, {'color': 'green'}, '#movieLi')
}