export const success = (params: object = {}) => ({
    status: "success",
    ...params
});

export const failure = (message: string) => ({
    status: "error",
    message
});


export const maxPage = (total: number, itemsPerPage: number) => Math.ceil(total / itemsPerPage);
