import {
  Area,
  Camera,
  CollisionBody,
  GameContext,
  RectangleCollisionShape,
  StaticCollisionBody,
  Vector2D,
} from 'jf-canvas-game-engine';

import { gravity, maxFallSpeed } from './globalValues';

export class Player extends CollisionBody {
  #width = 50;
  #height = 50;
  #color = 'green';
  #jumpForce = 1500;
  #moveSpeed = 20;
  #maxMoveSpeed = 500;
  #camera = new Camera(new Vector2D(0, 0));
  #velocity = new Vector2D(0, 0);
  #headArea: Area;
  #feetArea: Area;
  constructor(position: Vector2D) {
    super(
      position,
      new RectangleCollisionShape(new Vector2D(-25, -25), 50, 50)
    );

    this.addChild(this.#camera);
    GameContext.getInstance().setActiveCamera(this.#camera);

    this.#headArea = new Area(
      new Vector2D(0, -25),
      new RectangleCollisionShape(new Vector2D(-20, 0), 40, 5)
    );

    this.addChild(this.#headArea);

    this.#feetArea = new Area(
      new Vector2D(0, 25),
      new RectangleCollisionShape(new Vector2D(-20, -5), 40, 5)
    );

    this.addChild(this.#feetArea);
  }

  isGrounded(): boolean {
    const collidingBodies = this.#feetArea.getCollidingBodies();
    let grounded = false;

    collidingBodies.forEach((body) => {
      if (body instanceof StaticCollisionBody) {
        grounded = true;
        return;
      }
    });

    return grounded;
  }

  #applyGravity(): void {
    this.#velocity = this.#velocity.add(new Vector2D(0, gravity));
  }

  #wantToMoveLeft(): boolean {
    return GameContext.getInstance().isPressed('a');
  }

  #wantToMoveRight(): boolean {
    return GameContext.getInstance().isPressed('d');
  }

  #moveLeft(): void {
    this.#velocity = this.#velocity.add(new Vector2D(-this.#moveSpeed, 0));
  }

  #moveRight(): void {
    this.#velocity = this.#velocity.add(new Vector2D(this.#moveSpeed, 0));
  }

  #wantToJump(): boolean {
    return GameContext.getInstance().isJustPressed(' ');
  }

  #jump(): void {
    this.#velocity = this.#velocity.add(new Vector2D(0, -this.#jumpForce));
  }

  #bumpedHead(): boolean {
    const collidingBodies = this.#headArea.getCollidingBodies();
    let bumpedHead = false;

    collidingBodies.forEach((body) => {
      if (body instanceof StaticCollisionBody) {
        bumpedHead = true;
        return;
      }
    });

    return bumpedHead;
  }

  override process(delta: number): void {
    if (this.#bumpedHead()) {
      this.#velocity = new Vector2D(this.#velocity.x, 0);
    }

    if (!this.isGrounded()) {
      this.#applyGravity();
    } else {
      this.#velocity = new Vector2D(this.#velocity.x, 0);
    }

    if (this.#wantToMoveLeft()) {
      this.#moveLeft();
    }

    if (this.#wantToMoveRight()) {
      this.#moveRight();
    }

    if (this.#wantToJump() && this.isGrounded()) {
      this.#jump();
    }

    if (this.#velocity.y > maxFallSpeed) {
      this.#velocity = new Vector2D(this.#velocity.x, maxFallSpeed);
    }

    if (this.#velocity.x > this.#maxMoveSpeed) {
      this.#velocity = new Vector2D(this.#maxMoveSpeed, this.#velocity.y);
    }

    if (this.#velocity.x < -this.#maxMoveSpeed) {
      this.#velocity = new Vector2D(-this.#maxMoveSpeed, this.#velocity.y);
    }

    this.position = this.position.add(this.#velocity.multiply(delta));
    delta > 0 &&
      (this.#velocity = new Vector2D(
        Math.floor(this.#velocity.x * 0.99),
        this.#velocity.y
      ));
  }

  override render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.#color;
    ctx.fillRect(
      this.position.x - this.#width / 2,
      this.position.y - this.#height / 2,
      this.#width,
      this.#height
    );
  }
}
