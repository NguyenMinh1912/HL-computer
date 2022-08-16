import {useState} from "react";
import 'antd/dist/antd.css';
import {Button} from "antd";
import {UpdateForm} from "./update-form";


// @ts-ignore
const UpdateButton = (id) => {
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
                Update
            </Button>

            <UpdateForm
                id={id}
                visible={isModalVisible}
                onCancel={() => {
                    setIsModalVisible(false)
                }}
            />
        </>
    )
}

export {UpdateButton};