import { Component, ElementRef, ViewChild } from '@angular/core';
import { GameEngine } from 'jf-canvas-game-engine';
import { Level1 } from './gameObjects/Level1';

@Component({
  selector: 'app-game',
  standalone: true,
  template: ` <style>
      canvas {
        border: 1px solid black;
        background-color: gray;
        height: 80dvh;
      }
    </style>
    <canvas #canvas width="1280" height="720"></canvas>
    <button (click)="startGame($event)">Start</button>`,
})
export class GameComponent {
  @ViewChild('canvas')
  canvas!: ElementRef<HTMLCanvasElement>;
  gameEngine!: GameEngine;

  ngAfterViewInit() {
    this.gameEngine = new GameEngine(this.canvas.nativeElement, new Level1(), {
      debug: true,
    });
  }

  ngOnDestroy() {
    this.gameEngine.stop();
  }

  startGame(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    clickedElement.remove();
    this.gameEngine.start();
  }
}
