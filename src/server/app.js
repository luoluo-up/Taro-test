const Koa = require("koa");
const Router = require("@koa/router");
const fs = require("fs").promises;
const path = require("path");
const koaStatic = require("koa-static");

const HOST = "http://localhost:3000";
const app = new Koa();
const router = new Router();

// 设置数据目录
const dataDir = path.resolve(__dirname, "data");

// 修正：正确的静态资源目录
const assetsDir = path.resolve(__dirname, "../../src/assets");

console.log(`🖼️ 静态资源目录设置为: ${assetsDir}`);

// 修复图片路径转换函数
const fixImagePath = (img) => {
  if (!img) return "/default.png"; // 添加默认图片路径

  // 处理路径：确保以斜杠开头
  let cleanedPath = img;

  // 移除前缀"@/"或"@"
  if (img.startsWith("@/")) {
    cleanedPath = img.substring(1);
  } else if (img.startsWith("@")) {
    cleanedPath = img.substring(1);
  }

  // 确保以斜杠开头
  if (!cleanedPath.startsWith("/")) {
    cleanedPath = "/" + cleanedPath;
  }

  console.log(`🔄 路径转换: ${img} → ${cleanedPath}`); // 添加调试日志
  return cleanedPath;
};

// 会员数据路由
router.get("/members", async (ctx) => {
  try {
    const filePath = path.join(dataDir, "members.json");
    console.log("📂 尝试读取会员数据文件:", filePath);

    const rawData = await fs.readFile(filePath, "utf-8");
    const members = JSON.parse(rawData);

    // 使用修复后的转换函数
    const transformed = members.map((item) => {
      const fixedImgPath = fixImagePath(item.img);
      return {
        ...item,
        img: `${HOST}${fixedImgPath}`, // 确保斜杠被正确添加
      };
    });

    ctx.type = "application/json";
    ctx.body = {
      code: 200,
      message: "成功获取会员数据",
      data: transformed,
    };
  } catch (error) {
    console.error("❌ 读取会员数据失败:", error.message);
    ctx.status = 500;
    ctx.body = {
      code: 500,
      message: `服务器错误: ${error.message}`,
    };
  }
});

// 课程数据路由
router.get("/classes", async (ctx) => {
  try {
    const filePath = path.join(dataDir, "classes.json");
    console.log("📂 尝试读取课程数据文件:", filePath);

    const rawData = await fs.readFile(filePath, "utf-8");
    const classes = JSON.parse(rawData);

    // 使用修复后的转换函数
    const transformed = classes.map((item) => {
      const fixedImgPath = fixImagePath(item.img);
      return {
        ...item,
        img: `${HOST}${fixedImgPath}`, // 确保斜杠被正确添加
      };
    });

    ctx.type = "application/json";
    ctx.body = {
      code: 200,
      message: "成功获取课程数据",
      data: transformed,
    };
  } catch (error) {
    console.error("❌ 读取课程数据失败:", error.message);
    ctx.status = 500;
    ctx.body = {
      code: 500,
      message: `服务器错误: ${error.message}`,
    };
  }
});

// 应用路由
app.use(router.routes());
app.use(router.allowedMethods());

// 添加静态资源中间件
console.log(`🌐 注册静态资源服务: ${assetsDir}`);
app.use(
  koaStatic(assetsDir, {
    maxage: 3600000, // 1小时缓存
    gzip: true,
  })
);

// 启动服务器
const PORT = 3000;
app.listen(PORT, async () => {
  console.log(`\n🚀 服务器已启动: ${HOST}`);
  console.log(`📡 会员数据接口: ${HOST}/members`);
  console.log(`📡 课程数据接口: ${HOST}/classes`);

  // 验证测试图片
  try {
    const testUrl = `${HOST}/images/venue/user3.png`;
    const response = await fetch(testUrl);

    if (response.status === 200) {
      console.log(`✅ 测试图片访问成功: ${testUrl}`);
    } else {
      console.log(
        `❌ 测试图片访问失败: ${response.status} ${response.statusText}`
      );
    }
  } catch (error) {
    console.error("🚫 测试图片访问失败:", error.message);
  }

  // 添加默认图片路由
  router.get("/default.png", async (ctx) => {
    ctx.body = "默认图片内容";
    ctx.type = "image/png";
  });

  console.log("\n");
});
