import * as THREE from 'three';

import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';

const scene = new THREE.Scene();
const FOV = 75;
const AspectRatio = window.innerWidth / window.innerHeight;
const NearLimit = .1;
const FarLimit = 1000;
const camera = new THREE.PerspectiveCamera( FOV, AspectRatio, NearLimit, FarLimit );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const materialTwo = new LineMaterial( { color: 0xFFFFFF, linewidth: 3 } );

const pointsTwo = [];
pointsTwo.push( new THREE.Vector3( -1, 0, 0 ) );
pointsTwo.push( new THREE.Vector3( -1, -2, 0 ) );
pointsTwo.push( new THREE.Vector3( 0, 0, 0 ) );

const geometryTwo = new LineGeometry().setFromPoints( pointsTwo );

const lineTwo = new Line2( geometryTwo, materialTwo ) ;

// ------------------------------------------------------------------------------

const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

const points = [];
points.push( new THREE.Vector3( 1, 0, 0 ) );
points.push( new THREE.Vector3( 1, 2, 0 ) );
points.push( new THREE.Vector3( 0, 0, 0 ) );

const geometry = new THREE.BufferGeometry().setFromPoints( points );

const line = new THREE.Line( geometry, material );

camera.position.z = 5;

scene.add(line);
scene.add(lineTwo);

function animate() {
  renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );