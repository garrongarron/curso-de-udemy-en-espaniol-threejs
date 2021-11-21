import camera from "./basic/Camera.js";
import cube from "./Cube.js";
import keyListener from "./basic/KeyListener.js";
import light from "./Light.js";
import renderer from "./basic/Renderer.js";
import resize from "./basic/Resize.js";
import scene from "./basic/Scene.js"
import './OrbitImplementation.js'
import './basic/StatsImplementations.js'
// import guiImplementation from "./GuiImplementation.js";
import plane from "./Plane.js";
import loopMachine from "./basic/LoopMachine.js";
import lander from "./basic/Lander.js";
import rayLander from "./basic/RayLander.js";
import cubeController from "./basic/CubeController.js";
import ratationController from "./basic/RotationController.js";
import moveController from "./basic/MoveController.js";
import shadowController from "./basic/ShadowController.js";

scene.add(cube)
camera.position.set(1, 2, 5)
camera.lookAt(cube.position)
scene.add(light);
resize.start(renderer)

loopMachine.addCallback(() => {
    renderer.render(scene, camera)
});

scene.add( plane );

keyListener.start()
loopMachine.start()
// lander.start(cube, .5)
rayLander.start(cube, .5)
// cubeController.start(cube)
ratationController.start(cube)
moveController.start(cube)
shadowController.start(cube, light.children[0], new THREE.Vector3(5,5,5))

const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

