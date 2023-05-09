
/* 
We need 4 elements to get started:
1. A scene that will contain objects
2. Some objects
3. A camera
4. A renderer
*/

//--------------------------- Scene----------------------------------------

const scene = new THREE.Scene()

// Red Cube
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)

// always add mesh to scene
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}


//-----------------------Camera-------------------------------------
const camera = new THREE.PerspectiveCamera( 75, sizes.width /sizes.height, 1, 1000 )
camera.position.z = 5
camera.position.x = 2
camera.position.y = 2
scene.add(camera)


// Renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width,sizes.height)
renderer.render(scene, camera) // we can't view any thing becoz camera is inside the triangle
// so we move the position of camera , at one time we only see the one side of triangle


