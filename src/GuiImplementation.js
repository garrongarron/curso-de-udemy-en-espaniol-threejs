import cache from "./Cache.js"
import cube from "./Cube.js"
import { GUI } from "./GUI.js"

class GuiImplementation {
    constructor() {
        this.gui = null
    }
    start() {
        if (this.gui) {
            // this.gui.show()
            document.body.appendChild(this.gui.getRoot().domElement.parentNode)
            return
        }
        this.gui = new GUI()
        let colorObj = {
            colorParam: 0xff0000
        }
        this.gui.addColor(colorObj, 'colorParam').name('COLOR').onChange(() => {
            cube.material.color.set(colorObj.colorParam)
        })
        const rotation = this.gui.addFolder("Rotation")
        rotation.add(cube.rotation, 'x', 0, Math.PI * 2).step(Math.PI / 180)
        rotation.add(cube.rotation, 'y', 0, Math.PI * 2).step(Math.PI / 180)
        rotation.add(cube.rotation, 'z', 0, Math.PI * 2).step(Math.PI / 180)

        const position = this.gui.addFolder("Position!!")
        position.add(cube.position, 'x').min(-10).max(10)
        position.add(cube.position, 'y').min(-10).max(10).step(.5)
        position.add(cube.position, 'z', -1, 1).step(1)

        // rotation.open()
        position.open()
    }
    stop() {
        // this.gui.destroy()
        cache.appendChild(this.gui.getRoot().domElement.parentNode)
    }
}

const guiImplementation = new GuiImplementation()

export default guiImplementation