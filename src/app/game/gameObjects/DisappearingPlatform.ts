import {
  Area,
  CollisionLayers,
  RectangleCollisionShape,
  Vector2D,
} from 'jf-canvas-game-engine';
import { Platform } from './Platform';
import { Player } from './Player';

export class DisappearingPlatform extends Platform {
  #topArea: Area;
  constructor(
    position: Vector2D,
    width: number,
    height: number,
    color: string | CanvasGradient | CanvasPattern
  ) {
    super(position, width, height, color);
    const collisionLayers = new CollisionLayers();
    collisionLayers.setLayer(1, false);
    collisionLayers.setLayer(2, true);
    this.#topArea = new Area(
      new Vector2D(0, -(height / 2)),
      new RectangleCollisionShape(
        new Vector2D(-(width / 2) + 5, 0),
        width - 10,
        5
      ),
      collisionLayers
    );
    this.addChild(this.#topArea);
  }

  #isPlayerOnPlatform(): boolean {
    const collidingBodies = this.#topArea.getCollidingBodies();
    if (collidingBodies) {
      console.log('collidingBodies:', collidingBodies);
    }
    for (const body of collidingBodies) {
      if (body instanceof Player) {
        return true;
      }
    }
    return false;
  }

  override process(delta: number): void {
    super.process(delta);
    if (this.#isPlayerOnPlatform()) {
      this.remove();
    }
  }
}
