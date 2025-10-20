import * as THREE from 'three';

import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import {MeshLine, MeshLineGeometry, MeshLineMaterial} from '@lume/three-meshline';

const scene = new THREE.Scene();
const FOV = 75;
const AspectRatio = window.innerWidth / window.innerHeight;
const NearLimit = .1;
const FarLimit = 1000;
const camera = new THREE.PerspectiveCamera( FOV, AspectRatio, NearLimit, FarLimit );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0xFFFFFF, 0)
document.body.appendChild( renderer.domElement );

const texture = new THREE.TextureLoader().load( "public/texture/pencil_noise.png" );
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set( 1, 1 );

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { map: texture, color: 0xFFFFFF } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// ------------------------------------------------------------------------------

const materialTwo = new MeshLineMaterial( { color: 0x000000, linewidth: 5 } );

// P sure that you cant make a euler path out of a cube so i jsut made two paths :P
// Make cube !!

const pointsOne = [];
pointsOne.push( new THREE.Vector3( -1, -1, -1 ) );
pointsOne.push( new THREE.Vector3( -1, -1, 1 ) );
pointsOne.push( new THREE.Vector3( -1, 1, 1 ) );
pointsOne.push( new THREE.Vector3( -1, 1, -1 ) );
pointsOne.push( new THREE.Vector3( -1, -1, -1 ) );
pointsOne.push( new THREE.Vector3( 1, -1, -1 ) );
pointsOne.push( new THREE.Vector3( 1, 1, -1 ) );
pointsOne.push( new THREE.Vector3( -1, 1, -1 ) );

const geometryOne = new MeshLineGeometry().setFromPoints( pointsOne );

const pointsTwo = [];
pointsTwo.push( new THREE.Vector3( 1, 1, 1 ) );
pointsTwo.push( new THREE.Vector3( 1, 1, -1 ) );
pointsTwo.push( new THREE.Vector3( 1, -1, -1 ) );
pointsTwo.push( new THREE.Vector3( 1, -1, 1 ) );
pointsTwo.push( new THREE.Vector3( 1, 1, 1 ) );
pointsTwo.push( new THREE.Vector3( -1, 1, 1 ) );
pointsTwo.push( new THREE.Vector3( -1, -1, 1 ) );
pointsTwo.push( new THREE.Vector3( 1, -1, 1 ) );

const geometryTwo = new MeshLineGeometry().setFromPoints( pointsTwo );

const lineOne = new MeshLine( geometryOne, materialTwo ) ;
const lineTwo = new MeshLine( geometryTwo, materialTwo ) ;

scene.add(lineOne);
scene.add(lineTwo);

// ------------------------------------------------------------------------------

// const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

// const points = [];
// points.push( new THREE.Vector3( 1, 0, 0 ) );
// points.push( new THREE.Vector3( 1, 2, 0 ) );
// points.push( new THREE.Vector3( 0, 0, 0 ) );

// const geometry = new THREE.BufferGeometry().setFromPoints( points );

// const line = new THREE.Line( geometry, material );

// scene.add(line);

camera.position.z = 5;

function animate() {
  renderer.render( scene, camera );

  lineOne.rotateX(0.02);
  lineOne.rotateY(0.02);
  lineOne.rotateZ(0.02);
  lineTwo.rotateX(0.02);
  lineTwo.rotateY(0.02);
  lineTwo.rotateZ(0.02);
}
renderer.setAnimationLoop( animate );