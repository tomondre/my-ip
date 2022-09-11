import CallerData from "./models/CallerData";
import ConnectionData from "./models/ConnectionData";
import Currency from "./models/Currency";
import Timezone from "./models/Timezone";
import Address from "./models/Address";
import abstractApiCall from "./AbstractApiCall";
import {Request} from "express";
import BodyAbstractApi from "./models/BodyAbstractApi";

export default async function (req: Request): Promise<BodyAbstractApi> {
    let d: BodyAbstractApi = {} as BodyAbstractApi;
    let ip = req.header("cf-connecting-ip");
    if (ip === undefined) {
        throw new Error("No ip address found");
    }
    d.ip_address = ip;

    console.log('IP found');

    try {
        d = await abstractApiCall(ip);
    } catch (e: any) {
        throw new Error(e);
    }
    return d;
}