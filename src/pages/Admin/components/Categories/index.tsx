import {useEffect, useState} from "react";
import CategoryRequest from "../../model/request/CategoryRequest";
import categoryService from "../../../../core/services/admin/CategoryService";
import {Button, Table, TablePaginationConfig} from "antd";
import CategoryResponse from "../../model/response/CategoryResponse";
import {CreateModal} from "./create-modal";
import ConfigTypeEnum from "../../enums/ConfigTypeEnum";

const columns = [
    {
        title: 'id',
        dataIndex: 'id',
        width: '5%',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        sorter: true,
    },
    {
        title: 'Creat Date',
        dataIndex: 'createDate',
        sorter: true,
    },
    {
        title: 'Update Date',
        dataIndex: 'updateDate',
        sorter: true,
    },
    {
        title: 'Action',
        render: (record: any) =>
             (
                <Button title="Sure to delete?">
                    Delete
                </Button>
            )
    }
];

const Categories = () => {
    const [data, setData] = useState<CategoryResponse[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [pagination, setPagination] = useState<TablePaginationConfig>({
        current: 1,
        pageSize: 5,
    });

    const [totalCategories, setTotalCategories] = useState<number>(0)

    const [request, setRequest] = useState<CategoryRequest>({
        name: 'PC GAMING',
        type: ConfigTypeEnum.CATEGORY
    })


    useEffect(() => {
        (async () => {
            await getPageCategories(request);
        })();
    }, [pagination, request]);

    const handleTableChange = async (newPagination: any) => {
        setPagination({...newPagination})

    };

    const getPageCategories = async (request: CategoryRequest) => {
        const res = await categoryService.getCategoryWithCondition({
            ...request,
            page: (pagination?.current || 1) - 1,
            size: pagination.pageSize
        });
        setData(res.result.data);
        setTotalCategories(res.result.totalElements);
    }


    return (
        <>
            <CreateModal />

            <Table

                columns={columns}
                rowKey={(record) => record.id}
                dataSource={data}
                pagination={{
                    ...pagination,
                    total: totalCategories
                }}
                loading={loading}
                onChange={handleTableChange}
            />
        </>
    );
}

export {Categories};