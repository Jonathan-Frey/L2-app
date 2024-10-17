import {
  Camera,
  GameContext,
  GameObject,
  Vector2D,
} from 'jf-canvas-game-engine';

export class DebugCamera extends Camera {
  constructor(position: Vector2D) {
    super(position);
    GameContext.getInstance().setActiveCamera(this);
  }

  override process(delta: number): void {
    GameContext.getInstance().isPressed('w') &&
      (this.position = this.position.add(new Vector2D(0, -10)));
    GameContext.getInstance().isPressed('s') &&
      (this.position = this.position.add(new Vector2D(0, 10)));
    GameContext.getInstance().isPressed('a') &&
      (this.position = this.position.add(new Vector2D(-10, 0)));
    GameContext.getInstance().isPressed('d') &&
      (this.position = this.position.add(new Vector2D(10, 0)));
  }
}
