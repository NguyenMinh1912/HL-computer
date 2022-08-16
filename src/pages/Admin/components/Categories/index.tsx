import {useEffect, useState} from "react";
import './index.css'
import CategoryRequest from "../../model/request/CategoryRequest";
import categoryService from "../../../../core/services/admin/CategoryService";
import {Button, Table, TablePaginationConfig, Popconfirm} from "antd";
import CategoryResponse from "../../model/response/CategoryResponse";
import {CreateButton} from "./create-button";
import ConfigTypeEnum from "../../enums/ConfigTypeEnum";
import {UpdateButton} from "./update-button";
import NotificationUtils from "../../../../common/Utils/NotificationUtils";


const Categories = () => {
    const [data, setData] = useState<CategoryResponse[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [loadingData, setLoadingData] = useState<boolean>(true);
    const [dataSource, setDatasource] = useState([new CategoryResponse]);
    const [pagination, setPagination] = useState<TablePaginationConfig>({
        current: 1,
        pageSize: 5,
    });

    const [totalCategories, setTotalCategories] = useState<number>(0)

    const [request, setRequest] = useState<CategoryRequest>({
        name: '',
        type: ConfigTypeEnum.CATEGORY
    })


    useEffect(() => {
        (async () => {
            await getPageCategories(request, true);
        })();
    }, [pagination, request]);

    const handleTableChange = async (newPagination: any) => {
        setPagination({...newPagination})
    };

    const getPageCategories = async (request: CategoryRequest, isLoad: boolean) => {
        console.log("in ",isLoad)
        if (isLoad) {
            const res = await categoryService.getCategoryWithCondition({
                ...request,
                page: (pagination?.current || 1) - 1,
                size: pagination.pageSize
            });
            setDatasource(res.result.data);
            setData(res.result.data);
            setTotalCategories(res.result.totalElements);
            isLoad = false;
            console.log("out ",isLoad)
        }
        console.log( isLoad);
    }


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
            width: '15%',
            render: (record: { id: React.Key }) =>
                (
                    <div className="action">
                        <UpdateButton id={record.id}/>
                        <Popconfirm
                            title="Sure to delete"
                            onConfirm={() => handleOk(record.id)}
                        >
                            <Button style={{marginLeft: 10}} danger title="Sure to delete?">
                                Delete
                            </Button>
                        </Popconfirm>
                    </div>
                )
        }
    ];

    const handleOk = (id: React.Key) => {
        categoryService.deleteById(id as number)
            .then((res) => {
                if (res.statusCode === '200') {
                    console.log("handlerOke")
                    NotificationUtils.successNoti("Xóa");
                    setLoadingData(true);
                    console.log("handlerOke", loadingData)
                    getPageCategories(request, true);
                    dataSource.filter((item) => item.id !== id)
                }
            }).catch((error) => {
            NotificationUtils.failNoti("Xóa");
        });
    }


    return (
        <>
            <CreateButton isLoadData={() => {
                getPageCategories(request, true);
                dataSource.filter((item) => item.id)
            }}/>

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