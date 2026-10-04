const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// Folder hasil build Android diabaikan supaya Metro tidak crash saat Gradle sedang build
const config = {
  resolver: {
    blockList: [
      /(^|[/\\])android[/\\](\.gradle|\.kotlin|build|\.cxx)([/\\].*)?$/,
      /(^|[/\\])android[/\\]app[/\\](build|\.cxx)([/\\].*)?$/,
      /[/\\]@react-native[/\\]gradle-plugin([/\\].*)?$/,
    ],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);

