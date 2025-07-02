import Taro from "@tarojs/taro";

interface RequestParams {
  url: string;
  method:
    | "OPTIONS"
    | "GET"
    | "HEAD"
    | "POST"
    | "PUT"
    | "PATCH"
    | "DELETE"
    | "TRACE"
    | "CONNECT";
  data?: any;
  header?: any;
  timeout?: number;
  loadingTitle?: string;
  toastDuration?: number;
  [key: string]: any;
}

export function request(params: RequestParams) {
  const {
    url,
    method,
    data,
    header,
    timeout = 6000,
    loadingTitle = "加载中",
    toastDuration = 1500,
  } = params;

  Taro.showLoading({
    title: loadingTitle,
    mask: true,
  });

  return new Promise((resolve) => {
    Taro.request({
      url: baseUrl + url,
      method: method,
      data, 
      timeout,
      header: {
        "content-type": "application/json;charset=UTF-8,text/plain,*/*",
        ...header,
      },
      success: (res) => {
        Taro.hideLoading();
        console.log("success", res);

        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data); 
        } else {
          showError(res.data?.message || "请求失败", toastDuration);
          resolve({
            success: false,
            message: res.data?.message || "请求失败",
          });
        }
      },
      fail: (error) => {
        Taro.hideLoading();
        console.log("fail", error);
        showError("请求失败: " + error.errMsg, toastDuration);
        resolve({
          success: false,
          message: error.errMsg,
        });
      },
    });
  });
}

function showError(message: string, duration = 1500) {
  Taro.showToast({
    title: message,
    icon: "none",
    duration,
  });
}

const baseUrl = "http://localhost:3000/";
