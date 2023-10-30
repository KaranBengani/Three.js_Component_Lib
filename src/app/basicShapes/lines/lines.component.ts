import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.css'],
})
export class LinesComponent implements OnInit {
  @ViewChild('line') canvasRef!: ElementRef;
  constructor() {}
  ngOnInit(): void {}
  ngAfterViewInit() {
    this.renderBasicLines();
  }
  renderBasicLines() {
    const canvas = this.canvasRef.nativeElement;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);
    const renderer = new THREE.WebGL1Renderer({ canvas: canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);
    const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
    const points = [];
    points.push(new THREE.Vector3(-10, 0, 0));
    points.push(new THREE.Vector3(0, 10, 0));
    points.push(new THREE.Vector3(10, 0, 0));
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, material);
    scene.add(line);
    renderer.render(scene, camera);
  }
}
