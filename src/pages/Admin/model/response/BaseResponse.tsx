class BaseResponse<T> {
    status!: string;
    message!: string;
    result!: {
        data: T[],
        size: number,
        page: number,
        totalElements: number;
    };
}

export default BaseResponse;