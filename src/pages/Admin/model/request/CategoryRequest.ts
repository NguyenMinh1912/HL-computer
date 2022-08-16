import ConfigTypeEnum from "../../enums/ConfigTypeEnum";

class CategoryRequest{
    page?: number;
    size?: number;
    name?: string | null;
    code?: string;
    type?: ConfigTypeEnum | null;
    parentId?: number;
}

export default CategoryRequest;