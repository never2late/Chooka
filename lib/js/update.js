

function update()
{
	controls.update();
	updateLayout();
}

function onWindowResize() {
	
	// alert('width : ' + window.innerWidth + ' , height : ' + window.innerHeight);
	isPortrait = (window.innerWidth < window.innerHeight);
	console.log('resize : width = ' + window.innerWidth + ' , height = ' + window.innerHeight );
//todo
	// var canvasWidth = 90;
	// var canvasHeight = 30;
	// var viewSize = 40;
	// var aspectRatio = canvasWidth / canvasHeight;

	// var left = -aspectRatio * viewSize * 0.5;
	// var right = -left;
	// var top = viewSize * 0.5;
	// var bottom = -top;

	screenWidth = window.innerWidth;
	screenHeight = window.innerHeight;

	var left = -screenWidth / 2;
	var right = -left;
	var top = screenHeight / 2;
	var bottom = -top;

	camera.setViewSize(left, right, top, bottom);
	camera.updateProjectionMatrix(); 

	if (status == statusType.mapOpen) {
		mapContainer.adjustPosition();
	}

	renderer.setSize(screenWidth, screenHeight);
}

function onDocumentMouseDown( event ) 
{
	// the following line would stop any other event handler from firing
	// (such as the mouse's TrackballControls)
	// event.preventDefault();
	
	// console.log("Click.");
	
	// update the mouse variable
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

	var raycaster = new THREE.Raycaster();
	raycaster.setFromCamera( mouse, camera );

	// create an array containing all objects in the scene with which the ray intersects
	var intersects = raycaster.intersectObjects( targetList );
	
	// if there is one (or more) intersections
	if ( intersects.length > 0 )
	{
		// console.log("Hit @ " + toString( intersects[0].point ) );
		var mesh = intersects[0].object;

		if (status == statusType.normal) {
			switch ( mesh.objType ) {
				
				case objType.left:
					var playAnimation = mesh.playAnimation;
					mesh.playAnimation = !playAnimation;
				break;

				case objType.right:
					var playAnimation = mesh.playAnimation;
					mesh.playAnimation = !playAnimation;
				break;

				case objType.kakaoBox:
					callKakaoLink();
				break;

				case objType.facebookBox:
					callFacebookLink();
				break;

				case objType.mapBox:
					callNaverMapLink();
				break;
			}
		} else if (status == statusType.mapOpen) {
			if (mesh.objType == objType.bg) {
				removeNaverMapLink();
			}
		}
	}
}

