import { passDetaliesType } from "../types/customtypes";

export interface IInput {
    pass: string;
}
export interface IInputExtendet extends IInput{
    setPass: (value: string) => void;
    calculation: ()=>void;

}

export interface IDetalies extends IInput {
    passDetalies: passDetaliesType
}
