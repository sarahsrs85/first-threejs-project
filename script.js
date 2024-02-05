import * as THREE from 'three'

//scene
const scene = new THREE.Scene();

//object
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({ color : 0xff000 })
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);