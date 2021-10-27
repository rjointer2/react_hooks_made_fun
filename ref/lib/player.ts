import { BasePlayerModel } from "./baseEnemyModel";

export const me = new BasePlayerModel({
    color: "#ff0000",
    name: "jack",
    height: 32,
    width: 32,
    originalHeight: 32,
    x: 20,
    y: 0, 
    jumping: false,
    ducking: false,
    x_velocity: 0,
    y_velocity: 0
})