import { request } from "@/http/request";

interface ApiResponse<T = any> {
  code: number;
  message: string;
  data: T;
}

export const getMemberList = (): Promise<ApiResponse> => {
  return request({
    url: "members",
    method: "GET",
  });
};

// 添加课程接口
export const getClassList = () => {
  return request({
    url: "classes",
    method: "GET",
  });
};
