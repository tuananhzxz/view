import { GROUPID } from "../ultil/config";
import { baseService } from "./baseService";

export class QuanLyRapService extends baseService {

    constructor() {
        super();
    }
    
    layThongTinLichChieuPhim = () => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`);
    }
}

export const quanLyRapService = new QuanLyRapService();