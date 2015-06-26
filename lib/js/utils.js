


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
		var playAnimation = mesh.playAnimation;
		mesh.playAnimation = !playAnimation;
	}

}

function toString(v) { 
	return "[ " + v.x + ", " + v.y + ", " + v.z + " ]"; 
}
