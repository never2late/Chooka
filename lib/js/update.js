

function update()
{
	controls.update();
	updateLayout();
}

function onWindowResize() {
	
	// alert('width : ' + window.innerWidth + ' , height : ' + window.innerHeight);
	isPortrait = window.innerWidth < window.innerHeight;
	console.log('resize : width = ' + window.innerWidth + ' , height = ' + window.innerHeight );

	if (isPortrait == true) {
		multiplier = 0.1;
		iphoneWidth = 375 * multiplier;
		iphoneHeight = 559 * multiplier;

		left.position.set(-5, 3, 0);
		right.position.set(-7, -3, 0);

		left.rotation.set(0, 0, -Math.PI / 2);
		right.rotation.set(0, 0, -Math.PI / 2);
		bg.rotation.set(Math.PI / 2, 0, Math.PI);
	} else {
		multiplier = 0.04;
		// iphoneWidth = 667 * multiplier;
		// iphoneHeight = 375 * multiplier;
		iphoneWidth = 1000 * multiplier;
		iphoneHeight = 500 * multiplier;

		left.position.set(-3, -5, 0);
		right.position.set(3, -7, 0);

		left.rotation.set(0, 0, 0);
		right.rotation.set(0, 0, 0);
		bg.rotation.set(Math.PI / 2, Math.PI / 2, Math.PI);
	}

	camera.updateProjectionMatrix(); 
	// renderer.setSize(width, height);
}