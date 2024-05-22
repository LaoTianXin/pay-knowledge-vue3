module.exports = {
  plugins: {
    "postcss-px-to-viewport-8-plugin": {
      // 目标单位
      unitToConvert: "px",
      // 设计稿宽度
      viewportWidth: 1920,
      // 保留几位小数
      unitPrecision: 6,
      // font-size 不做转化
      // propList: ["*", "!font-size"],
      // 转换成的单位
      viewportUnit: "vw",
      // 设置忽略文件，用正则做目录名匹配
      exclude: [/node_modules/],
      // 是否处理横屏情况
      landscape: false,
    },
  },
};
