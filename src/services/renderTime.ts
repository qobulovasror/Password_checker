import { passDetaliesType } from "../types/customtypes";

const renderTimes = (pass: string, passDetalies: passDetaliesType): string => {
    if(pass.length < 6) return "Bir zumda";
    if(passDetalies.nums>0 && passDetalies.chars==0 && passDetalies.lowerLetter==0 && passDetalies.uppLetter==0){
        return addTimeForNum(pass.length);
    }else{
        if((passDetalies.nums==0 && passDetalies.chars==0 && passDetalies.lowerLetter>0 && passDetalies.uppLetter==0)|| 
            passDetalies.nums==0 && passDetalies.chars==0 && passDetalies.lowerLetter==0 && passDetalies.uppLetter>0){
            if(passDetalies.lowerLetter>0){
                return addTimeForLowerLetters(pass.length);
            }else{
                return addTimeForLowerLetters(pass.length);
            }
        }else{
            if(passDetalies.nums==0 && passDetalies.chars==0 && passDetalies.lowerLetter>0 && passDetalies.uppLetter>0){
                return addTimeForLowerAndUpperLetters(pass.length);
            }else{
                if(passDetalies.nums>0 && passDetalies.chars==0 && passDetalies.lowerLetter>0 && passDetalies.uppLetter>0){
                    return addTimeForLowerAndUpperAndNumLetters(pass.length);
                }else{
                    return addTimeForSpecialCharacters(pass.length);
                }
            }
        }
    }
    
    return "";
}

export default renderTimes;

function addTimeForNum(len: number): string {
    if(len < 12) return "Bir zumda";
    switch (len) {
        case 12: return 2+" soniya";
        case 13: return 19+" soniya";
        case 14: return 3+" daqiqa";
        case 15: return 32+" daqiqa";
        case 16: return 5+" soat";
        case 17: return 2+" kun";
        case 18: return 3+" hafta";
        default: return 3+" haftadan ko'proq";
    }
}

function addTimeForLowerLetters(len: number): string {
    if(len < 9) return "Bir zumda";
    switch (len) {
        case 9: return 10+" soniya";
        case 10: return 4+" daqiqa";
        case 11: return 2+" soat";
        case 12: return 2+" kun";
        case 13: return 2+" oy";
        case 14: return 4+" yil";
        case 15: return 100 + " yil";
        case 16: return 3 + " ming yil";
        case 17: return 69+" ming yil";
        case 18: return 2+" million yil";
        default: return 2+" million yildan ko'proq";
    }
}

function addTimeForLowerAndUpperLetters(len: number): string {
    if(len < 7) return "Bir zumda";
    switch (len) {
        case 7: return 2+" soniya";
        case 8: return 2+" daqiqa";
        case 9: return 1+" soat";
        case 10: return 3+" kun";
        case 11: return 5+" oy";
        case 12: return 24+" yil";
        case 13: return 100 + " yil";
        case 14: return 64 + " ming yil";
        case 15: return 69+" million yil";
        case 16: return 173+" million yil";
        case 17: return 9+" mlrd yil";
        case 18: return 467+" mlrd yil";
        default: return 467+" mlrd yildan ko'proq";
    }
}

function addTimeForLowerAndUpperAndNumLetters(len: number): string {
    if(len < 7) return "Bir zumda";
    switch (len) {
        case 7: return 7+" soniya";
        case 8: return 7+" daqiqa";
        case 9: return 7+" soat";
        case 10: return 3+" hafta";
        case 11: return 3+" yil";
        case 12: return 200+" yil";
        case 13: return 12 + " ming yil";
        case 14: return 750 + " ming yil";
        case 15: return 46 +" million yil";
        case 16: return 3+" mlrd yil";
        case 17: return 179+" mlrd yil";
        case 18: return 467+" trln yil";
        default: return 467+" trln yildan ko'proq";
    }
}

function addTimeForSpecialCharacters(len: number): string {
    if(len < 7) return "Bir zumda";
    switch (len) {
        case 7: return 31+" soniya";
        case 8: return 39+" daqiqa";
        case 9: return 2+" kun";
        case 10: return 5+" oy";
        case 11: return 34+" yil";
        case 12: return 3+" ming yil";
        case 13: return 202 + " ming yil";
        case 14: return 16 + " million yil";
        case 15: return 1 +" mlrd yil";
        case 16: return 92+" mlrd yil";
        case 17: return 7+" trln yil";
        case 18: return 438+" trln yil";
        default: return 438+" trln yildan ko'proq";
    }
}