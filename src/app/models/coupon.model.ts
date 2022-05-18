import { Company } from "./company.model";

export class Coupon {

    constructor
    (
    public id?:number, 
    public category?:string,
    public title?:string,
    public description?:string,
    public startDate?:Date,
    public endDate?:Date,
    public amount?:number,
    public price?:number,
    public image?:string,    
    public company?:Company
    ) {}






}
