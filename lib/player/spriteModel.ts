import { BaseModelInterface } from "../typeDef";

export class BaseModel {
    color: string;
    name: string;
    height: number;
    width: number;
    originalHeight: number;
    x: number;
    y: number; 
    jumping: boolean;
    ducking: boolean;
    x_velocity: number;
    y_velocity: number;
    weight: number;
    cols: number;
    spriteWidth: number;
    spriteSrc: string;

    constructor({ 
        color, name, height, width, originalHeight,
        x, y, jumping, ducking, x_velocity, y_velocity,
        cols, spriteWidth, spriteSrc
    } : BaseModelInterface) {
        this.color = color;
        this.name = name;
        this.height = height;
        this.width = width;
        this.originalHeight = originalHeight;
        this.x = x;
        this.y = y;
        this.jumping = jumping;
        this.ducking = ducking;
        this.x_velocity = x_velocity;
        this.y_velocity = y_velocity;
        this.weight = 1;
        this.cols = cols
        this.spriteWidth = spriteWidth;
        this.spriteSrc = spriteSrc;
    }
}
