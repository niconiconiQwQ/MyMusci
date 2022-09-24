// 当前模块：为 API 进行统一管理
// 引入封装的axios
import requests from "./request";
// 示例
export const GetCategoryList = () => {
  return requests({
    url: "product/getBaseCategoryList",
    method: "get",
  });
};

export const reqGoodList = (params) => {
  return requests({
    url: "/list",
    method: "post",
    data: params,
  });
};
