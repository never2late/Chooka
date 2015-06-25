

function update()
{
	controls.update();
	updateLayout();
}

function onWindowResize() {
	
	// alert('width : ' + window.innerWidth + ' , height : ' + window.innerHeight);
	isPortrait = (window.innerWidth < window.innerHeight);
	console.log('resize : width = ' + window.innerWidth + ' , height = ' + window.innerHeight );


	var multiplier = 0.1;
	var canvasWidth = window.innerWidth * multiplier;
	var canvasHeight = window.innerHeight * multiplier;

	var viewSize = 50;
	var aspectRatio = canvasWidth / canvasHeight;

	var left = -aspectRatio * viewSize * 0.5;
	var right = -left;
	var top = viewSize * 0.5;
	var bottom = -top;


	camera.updateProjectionMatrix(); 
	// renderer.setSize(canvasWidth, canvasHeight);
}