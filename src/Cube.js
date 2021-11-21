const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
cube.castShadow = true; //default is false
cube.receiveShadow = true; //default
export default cube