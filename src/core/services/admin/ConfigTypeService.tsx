import BaseResponse from "../../../pages/Admin/model/response/BaseResponse";
import client from "../../server";
import ConfigTypeResponse from "../../../pages/Admin/model/response/ConfigTypeResponse";

class ConfigTypeService {

    // @ts-ignore
    getConfigByType(type: string): Promise<BaseResponse<ConfigTypeResponse>> {
        return client.get("/hoanglong/api/v1/type-config", {
            params: {
                type: type
            }
        }).then(res => res.data);
    }

}

export default new ConfigTypeService();