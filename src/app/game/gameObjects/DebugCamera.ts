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

  #handleUserInitiatedMovement(): void {
    if (this.#wantToMoveUp()) {
      this.#moveUp();
    }
    if (this.#wantToMoveDown()) {
      this.#moveDown();
    }
    if (this.#wantToMoveLeft()) {
      this.#moveLeft();
    }
    if (this.#wantToMoveRight()) {
      this.#moveRight();
    }
  }

  #wantToMoveUp(): boolean {
    return GameContext.getInstance().isPressed('w');
  }

  #moveUp(): void {
    this.position = this.position.add(new Vector2D(0, -10));
  }

  #wantToMoveDown(): boolean {
    return GameContext.getInstance().isPressed('s');
  }

  #moveDown(): void {
    this.position = this.position.add(new Vector2D(0, 10));
  }

  #wantToMoveLeft(): boolean {
    return GameContext.getInstance().isPressed('a');
  }

  #moveLeft(): void {
    this.position = this.position.add(new Vector2D(-10, 0));
  }

  #wantToMoveRight(): boolean {
    return GameContext.getInstance().isPressed('d');
  }

  #moveRight(): void {
    this.position = this.position.add(new Vector2D(10, 0));
  }

  override process(delta: number): void {
    this.#handleUserInitiatedMovement();
  }
}
