import CategoryRequest from '../../../pages/Admin/model/request/CategoryRequest';
import CategoryResponse from "../../../pages/Admin/model/response/CategoryResponse";
import client from "../../server";
import BaseResponse from "../../../pages/Admin/model/response/BaseResponse";

class CategoryService {

    getCategoryWithCondition(request: CategoryRequest): Promise<BaseResponse<CategoryResponse>> {
        return client.get("/hoanglong/api/v1/category/search", {
            params: request
        }).then(res => res.data);
    }

    getAllCategory(): Promise<BaseResponse<CategoryResponse>> {
        return client.get("/hoanglong/api/v1/category")
            .then(res => res.data)
    }

    saveOrUpdate(request: CategoryRequest): Promise<BaseResponse<any>>{
        console.log(request)
        return client.post("/hoanglong/api/v1/category", request).then(res => res.data);
    }

}

export default new CategoryService();