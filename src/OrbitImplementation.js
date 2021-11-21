import camera from "./basic/Camera.js";
import loopMachine from "./basic/LoopMachine.js";
import renderer from "./basic/Renderer.js";
import cube from "./Cube.js";

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enablePan = false;
controls.enableZoom = true;
loopMachine.addCallback(() => {
    controls.target.set(
        cube.position.x,
        cube.position.y,
        cube.position.z,
    );
    controls.update();
})