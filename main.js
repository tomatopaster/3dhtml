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

const material = new THREE.LineBasicMaterial( { color: 0xFFFFFF } );
const points = [];
points.push( new THREE.Vector3( 1, 0, 0 ) );
points.push( new THREE.Vector3( 1, 2, 0 ) );
points.push( new THREE.Vector3( 0, 0, 0 ) );

const geometry = new THREE.BufferGeometry().setFromPoints( points );

const line = new THREE.Line( geometry, material );

camera.position.z = 5;

scene.add(line);

function animate() {
  renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );