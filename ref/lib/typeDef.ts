
export interface BasePlayerInterface {
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
}