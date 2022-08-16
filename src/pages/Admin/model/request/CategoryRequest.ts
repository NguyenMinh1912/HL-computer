import ConfigTypeEnum from "../../enums/ConfigTypeEnum";

class CategoryRequest{
    id?: number;
    page?: number;
    size?: number;
    name?: string | null;
    type?: ConfigTypeEnum | null;
    parentId?: number;
}

export default CategoryRequest;