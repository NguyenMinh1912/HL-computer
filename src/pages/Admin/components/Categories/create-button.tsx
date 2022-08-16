import {useState} from "react";
import 'antd/dist/antd.css';
import {Button} from "antd";
import {CreateForm} from "./create-form";


// @ts-ignore
const CreateButton = ({isLoadData}) => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    // @ts-ignore
    return (
        <>
            <Button
                type="primary"
                style={{marginBottom: 16}}
                onClick={() => {
                setIsModalVisible(true);
            }}
            >
                Add more
            </Button>
            <CreateForm
                visible={isModalVisible}
                isLoadData={isLoadData}
                onCancel={() => {
                    setIsModalVisible(false)
                }}
            />
        </>
    )
}

export {CreateButton};