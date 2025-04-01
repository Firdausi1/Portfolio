import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { Tween } from '@tweenjs/tween.js';

// 1. Setup Scene, Camera, Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 2. Load Font & Create 3D Text
const fontLoader = new FontLoader();
fontLoader.load('https://threejs.org/examples/fonts/helvetiker_bold.typeface.json', (font) => {
    const textGeometry = new TextGeometry('Firdausy Bashir', {
        font: font,
        size: 2,
        height: 0.5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.3,
        bevelSize: 0.2,
        bevelOffset: 0,
        bevelSegments: 5
    });

    const textMaterial = new THREE.MeshStandardMaterial({ color: 0xffcc00, emissive: 0xffaa00 });
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    textMesh.position.set(-5, 0, 0);
    scene.add(textMesh);

    animateText(textMesh);
});

// 3. Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0xffcc00, 2, 100);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// 4. Floating Particles
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 200;
const posArray = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 20;
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
const particlesMaterial = new THREE.PointsMaterial({ color: 0xffcc00, size: 0.1 });
const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);

// 5. Smooth Animation Function
function animateText(mesh) {
    new Tween(mesh.position)
        .to({ y: 1 }, 2000)
        .yoyo(true)
        .repeat(Infinity)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .start();
}

// 6. Camera Movement with Mouse
const controls = new OrbitControls(camera, renderer.domElement);
camera.position.z = 10;

// 7. Animation Loop
function animate() {
    requestAnimationFrame(animate);
    Tween.update();
    particles.rotation.y += 0.002;
    controls.update();
    renderer.render(scene, camera);
}
animate();

// 8. Responsive Resize
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
