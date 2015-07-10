

function loadMesh(path, callback) {
	loader.load( path, callback );

	totalLoadCount++;
}

function createScene(geometry, scale, tmap) {
	var material = new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture(tmap)});
	var mesh = new THREE.Mesh(geometry, material);

	mesh.scale.set(scale, scale, scale);
	mesh.isPlayingAnimation = false;
	meshes.push(mesh);

	return mesh;
}

function isWithinCanvas( mesh ) {
	var meshLeft = mesh.position.x - mesh.width / 2;
	var meshRight = meshLeft + mesh.width;
	var meshTop = mesh.position.y + mesh.height / 2;
	var meshBottom = meshTop - mesh.height;

	if ((canvasLeft <= meshLeft && meshLeft <= canvasRight) || canvasLeft <= meshRight && meshRight <= canvasRight) {
		if ((canvasBottom <= meshBottom && meshBottom <= canvasTop) || canvasBottom <= meshTop && meshTop <= canvasTop) {
			return true;
		}
	}

	return false;
}

function printf( message ) {
	if (debug == true) {
		console.log(message);
	}
}

function getTime() {
	return new Date().getTime();
}

function getBrowserInfo(){
    var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
    if(/trident/i.test(M[1])){
        tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
        return {name:'IE',version:(tem[1]||'')};
        }   
    if(M[1]==='Chrome'){
        tem=ua.match(/\bOPR\/(\d+)/)
        if(tem!=null)   {return {name:'Opera', version:tem[1]};}
        }   
    M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
    return {
      name: M[0],
      version: M[1]
    };
}

function toString(v) { 
	return "[ " + v.x + ", " + v.y + ", " + v.z + " ]"; 
}