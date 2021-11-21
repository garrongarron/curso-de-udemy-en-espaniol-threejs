import terrain from "./basic/Terrain.js";
import texture from "./Textures.js";

const geometry = new THREE.PlaneGeometry( 200, 200, 100, 100 );
const material = new THREE.MeshStandardMaterial( { 
    color: 0xffffff, side: THREE.DoubleSide,
    wireframe: false
} );
const plane = new THREE.Mesh( geometry, material );
plane.rotation.x = Math.PI*.5
plane.layers.enable( 1 );
plane.receiveShadow = true;

let arr = plane.geometry.attributes.position.array
let length = plane.geometry.attributes.position.array.length

for (let index = 0; index < length/3; index++) {
    arr[index*3+2] = terrain(arr[index*3+1], arr[index*3+0])
    
}
// console.log(plane.geometry.attributes.position.array[0]);




texture.ground.then((map)=>{
    plane.material.map = map
    plane.material.needsUpdate = true
    plane.material.map.wrapS = THREE.RepeatWrapping;
    plane.material.map.wrapT = THREE.RepeatWrapping;
    plane.material.map.repeat.set( 10, 20 );
})

export default plane