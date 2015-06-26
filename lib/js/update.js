

function update()
{
	controls.update();
	updateLayout();
}

function onWindowResize() {
	
	// alert('width : ' + window.innerWidth + ' , height : ' + window.innerHeight);
	isPortrait = (window.innerWidth < window.innerHeight);
	console.log('resize : width = ' + window.innerWidth + ' , height = ' + window.innerHeight );

	var canvasWidth = 90;
	var canvasHeight = 30;
	var viewSize = 40;
	var aspectRatio = canvasWidth / canvasHeight;

	var left = -aspectRatio * viewSize * 0.5;
	var right = -left;
	var top = viewSize * 0.5;
	var bottom = -top;

	camera.setViewSize(left, right, top, bottom);
	// camera.updateProjectionMatrix(); 
	// renderer.setSize(canvasWidth, canvasHeight);
}