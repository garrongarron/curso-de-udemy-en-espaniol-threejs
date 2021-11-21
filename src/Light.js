const light = new THREE.AmbientLight( 0x404040 ); // soft white light
const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
light.add(directionalLight)
directionalLight.position.set(5,5,5)

//shadow cofig
directionalLight.castShadow = true; // default false
//Set up shadow properties for the light
directionalLight.shadow.mapSize.width = 512; // default
directionalLight.shadow.mapSize.height = 512; // default
directionalLight.shadow.camera.near = 3; // default
directionalLight.shadow.camera.far = 20; // default

const helper = new THREE.CameraHelper( directionalLight.shadow.camera );
light.add(helper)

export default light