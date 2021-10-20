
export interface BasePlayerInterface {

    // charateristics
    color: string;
    name: string;
    height: number;
    width: number;
    originalHeight: number

    // coords

    x: number; // height poisitioning
    y: number; // left and right / y position

    // powers
    
    jumping: boolean; // a boolean to tell if the rectangle isn't grounded
    ducking: boolean;
    
    x_velocity: number;
    y_velocity: number;

}

export const basePlayerModel: BasePlayerInterface = {

    // charateristics
    color: "#ff0000",
    name: "",
    height: 32,
    width: 32,
    originalHeight: 32,

    // coords

    x: 32, // height poisitioning
    y: 0, // left and right / y position

    // powers
    
    jumping: false, // a false to tell if the rectangle isn't grounded
    ducking: false,
    
    x_velocity: 0,
    y_velocity: 0,
 
}