import camera from "./Camera.js";
import cube from "./Cube.js";
import keyListener from "./KeyListener.js";
import light from "./Light.js";
import loopMachine from "./LoopMachine.js";
import renderer from "./Renderer.js";
import resize from "./Resize.js";
import scene from "./Scene.js"
import './OrbitImplementation.js'
import './StatsImplementations.js'
import guiImplementation from "./GuiImplementation.js";
import plane from "./Plane.js";


scene.add(cube)
camera.position.set(1, 2, 5)
camera.lookAt(cube.position)
scene.add(light);
resize.start(renderer)

loopMachine.addCallback(() => {
    // cube.rotation.y += 0.01
    renderer.render(scene, camera)
}, 1000 / 30);

// setTimeout(() => {
//     console.log(keyListener.isPressed(13));
// }, 3000);

loopMachine.start()
keyListener.start()
// guiImplementation.start()

// setTimeout(() => {
//     guiImplementation.stop()
// }, 3000);

// setTimeout(() => {
//     console.log('again');
//     guiImplementation.start()
// }, 5000);


scene.add( plane );