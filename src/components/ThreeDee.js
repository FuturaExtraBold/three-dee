import React, { Component } from "react";

import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

class ThreeDee extends Component {

  componentDidMount() {
    console.log("ThreeDee componentDidMount");

    //this.renderBox();
    this.renderLogo();
  }

  renderLogo() {
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    let renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let loader = new OBJLoader();
    let assetUrl = require(`../assets/chill_skull.obj`);
    let object;

    loader.load(assetUrl, function(obj) {
      object = obj;
      console.log("loaded");
      scene.add(object);
      animate();
    }, null, function(error) {
      console.log("error:", error);
    });

    camera.position.z = 200;

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      object.rotation.x += 0.01;
      object.rotation.y += 0.01;
    }
  }

  renderBox() {
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    let renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let geometry = new THREE.BoxGeometry(1, 1, 1);
    let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    let cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
    }
    animate();
  }

  render() {
    return (
      ""
    );
  }
}

export default ThreeDee;
