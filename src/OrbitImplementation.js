import camera from "./Camera.js";
import renderer from "./Renderer.js";

const controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.enablePan = false;
controls.enableZoom = true;
controls.target.set( 0, 0, 0 );
controls.update();