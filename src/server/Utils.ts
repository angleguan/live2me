
import {Operat} from './operators';
/**
 * 用于定义数据类
 */

 // 日程
 export class Schedule {
    id: number;
    name: string;
    detail: string;
    startTime: string;
    endTime: string;
    complent: boolean;
    constructor(name: string){
        let dt = (new Operat()).dateFormat;
        this.id = (new Date()).getTime();
        this.name = name;
        this.detail = '';
        this.startTime = dt(new Date(), 'yyyy-MM-ddThh:mm:ss+08:00');
        this.endTime = dt(new Date((new Date()).getTime() + 1000*3600*24), 'yyyy-MM-ddThh:mm:ss+08:00');
        this.complent = false;
    }
 }