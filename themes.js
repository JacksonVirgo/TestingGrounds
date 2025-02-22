var themes = {
	'Dark (Default)': {
		classname: '',
		mpregame: 'Alfheim.mp3',
		whoami: 'Cascades.mp3',
		mmodtime: 'Valkyrie.mp3',
		mdaytime: 'Piglets.mp3',
		mvoting: 'Deceitful.mp3',
		mtrial: 'Truth.mp3',
		mnight: 'Chaos.mp3',
	},
	'Light': {
		className: 'lighttheme',
		mpregame: 'Alfheim.mp3',
		whoami: 'ToyPuzzle.mp3',
		mmodtime: 'Spinwheel.m4a',
		mdaytime: 'Piglets.mp3',
		mvoting: 'Deceitful.mp3',
		mtrial: 'Truth.mp3',
		mnight: 'CosmicCove.mp3',
	},
	'Salem': {
		className: 'tostheme',
		mpregame: 'CalmBeforeTheStorm.mp3',
		whoami: 'WhoAmI.mp3',
		mmodtime: 'Bewitching.mp3',
		mdaytime: 'Heated.mp3',
		mvoting: 'Suspicion.mp3',
		mtrial: 'Innocence.mp3',
		mnight: 'WLITN.mp3',
	},
};

$(function() {
	var themeselector = $('<label id="themeselector">🎨</label>');
	var menu = $('<select>');
	for(var title in themes) {
		var option = document.createElement('option');
		option.innerText = option.value = title;
		menu.append(option);
	}
	menu.change(function() {
		var theme = themes[this.value];
		if(theme) {
			var music = { mpregame, whoami, mmodtime, mdaytime, mvoting, mtrial, mnight };
			for(var v in music) {
				if(theme[v]) {
					music[v].src = theme[v];
					music[v].play();
				}
			}
			document.body.className = theme.className;
			localStorage.setItem('preferred_theme', this.value);
		}
	});
	menu.val(localStorage.getItem('preferred_theme')).change();
	themeselector.append(menu);
	$('#inputarea').append(themeselector);
});
