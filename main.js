import * as THREE from 'three';

const scene = new THREE.Scene();
const FOV = 75;
const AspectRatio = window.innerWidth / window.innerHeight;
const NearLimit = .1;
const FarLimit = 1000;
const camera = new THREE.PerspectiveCamera( FOV, AspectRatio, NearLimit, FarLimit );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
  renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );