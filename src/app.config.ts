export default {
  pages: ["pages/venue/index", "pages/more/index", "pages/my/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#000",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "white",
  },
  tabBar: {
    color: "#18181a",
    selectedColor: "#18181a",
    backgroundColor: "#ffffff",
    borderStyle: "black",
    custom: true,
    list: [
      {
        pagePath: "pages/venue/index",
        text: "场馆",
      },
      {
        pagePath: "pages/more/index",
        text: "更多",
      },
      {
        pagePath: "pages/my/index",
        text: "我的",
      },
    ],
  },
};
