export class Snowflake {
    private x: number = 10;
    private y: number = 10;
    private size: number = 10;
    private xSpeed: number = random(0, 4);
    private ySpeed: number = random(3, 4);
    private stopped: boolean = false;
    private color: string = "white";
    private borderColor: string = 'black';

    /* TODO REQUIRED - What's missing here? Add it! */
    constructor(x: number, y: number, size: number, color = "white", borderColor = "black") {
        this.x = x;
        this.y = y;
        this.size = size;
        this.xSpeed = this.xSpeed;
        this.ySpeed = this.ySpeed;
        this.stopped = this.stopped;
        this.color = this.color;
        this.borderColor = this.borderColor;
    }
    public stop() {
        this.stopped = false;
    }

    public go() {
        this.stopped = true;
    }
    public draw(): void {
        stroke(this.color);
        line(this.x, this.y + this.size / 2, this.x, this.y - this.size / 2);
        line(this.x + this.size / 2, this.y, this.x - this.size / 2, this.y);
        line(this.x - this.size / 3, this.y - this.size / 3, this.x + this.size / 3, this.y + this.size / 3);
        line(this.x - this.size / 3, this.y + this.size / 3, this.x + this.size / 3, this.y - this.size / 3);

    }

    public move(): void {
        if (this.stopped == false) {
            this.x = this.xSpeed + this.x;
            this.y = this.ySpeed + this.y;
            this.doBorderBehavior();
        }
    }

    public distFromMouse(): number {
        return dist(this.x, this.y, mouseX, mouseY);
    }

    private doBorderBehavior() {
        if (this.x < -this.size / 2) {
            this.x = width + this.size / 2;
        } else if (this.x > width + this.size / 2) {
            this.x = -this.size / 2;
        }
        if (this.y < -this.size / 2) {
            this.y = height + this.size / 2;
        } else if (this.y > height + this.size / 2) {
            this.y = -this.size / 2;
        }
    }
}
