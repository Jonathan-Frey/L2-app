import { Component, ElementRef, ViewChild } from '@angular/core';
import { GameContext, GameEngine } from 'jf-canvas-game-engine';
import { Level1 } from './gameObjects/Level1';
import { EndScene } from './gameObjects/EndScene';

@Component({
  selector: 'app-game',
  standalone: true,
  template: ` <style>
      .gameWrapper {
        position: relative;
      }

      canvas {
        border: 1px solid black;
        background-color: gray;
        height: 80dvh;
      }

      button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 32px;
        padding: 8px 32px;
        border-radius: 16px;
        background: black;
        color: white;
        border: none;
      }
    </style>
    <div class="gameWrapper">
      <canvas #canvas width="1280" height="720"></canvas>
      <button (click)="startGame($event)">Start Game</button>
    </div>`,
})
export class GameComponent {
  @ViewChild('canvas')
  canvas!: ElementRef<HTMLCanvasElement>;
  gameEngine!: GameEngine;

  ngAfterViewInit() {
    GameContext.getInstance().setCanvasContext(
      this.canvas.nativeElement.getContext('2d')!
    );
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
