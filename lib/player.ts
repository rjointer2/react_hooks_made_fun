import { BasePlayerInterface } from "./typeDef";

export class BasePlayerModel {
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

    constructor({ 
        color, name, height, width, originalHeight,
        x, y, jumping, ducking, x_velocity, y_velocity
    } : BasePlayerInterface) {
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
    }
}
