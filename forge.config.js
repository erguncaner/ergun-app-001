module.exports = {
  packagerConfig: {},
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {},
    },
    {
      name: "@electron-forge/maker-snap",
      config: {
        features: {
          audio: false,
          mpris: "com.example.mpris",
          webgl: true,
        },
        summary: "Pretty Awesome",
      },
    },
  ],
};
