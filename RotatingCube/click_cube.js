var camera;
var renderer;
var scene;


function init() {
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.y = -400;
    camera.position.z = 400;
    camera.position.x = 70;

    scene = new THREE.Scene();

    cube = new THREE.Mesh(new THREE.CubeGeometry(200, 100, 100), new THREE.MeshLambertMaterial(
        {
            color: 'blue',
        }));
    if (cube == null) {
        console.log("Cube element not set");
    }
    light = new THREE.DirectionalLight('white', 1);
    light.position.set(0, -400, 400).normalize();
    scene.add(light);

    scene.add(cube);

    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('mousedown', onDocumentMouseDown, false);
    render();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}
function onDocumentMouseDown() {
    animate();
}

function animate() {
    cube.rotation.y += 500;
    render();
}
function render() {
    renderer.render(scene, camera);
    console.log("Render is being called");
}