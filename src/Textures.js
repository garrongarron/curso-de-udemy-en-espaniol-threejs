const texture = {}

texture.ground = new Promise((res, rej) => {
    const loader = new THREE.TextureLoader();
    loader.load(
        'img/ground.jpg',
        function (texture) {
            res(texture)
        },
        function (err) {
            rej(err)
        }
    );
})

export default texture