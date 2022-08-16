import {toast} from "react-toastify";

class NotificationUtils {

    successNoti(message: string){
        toast.success(message + ' thành công !', {
            autoClose: 2000,
            position: toast.POSITION.TOP_RIGHT
        });
    }

    failNoti(message: string){
        toast.error(message + ' thất bại !', {
            autoClose: 2000,
            position: toast.POSITION.TOP_RIGHT
        });
    }

}

export default new NotificationUtils;