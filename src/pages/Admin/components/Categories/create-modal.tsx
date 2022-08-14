import {FunctionComponent, useState} from "react";
import 'antd/dist/antd.css';
import {Button, Form, Modal} from "antd";
import {CreateForm} from "./create-form";


// @ts-ignore
const CreateModal: FunctionComponent = () => {

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
                onCancel={() => {
                    setIsModalVisible(false)
                }}
            />
        </>
    )
}

export {CreateModal};