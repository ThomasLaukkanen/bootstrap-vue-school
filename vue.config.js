module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Göteborgarna'
      return args
    })
  },
  pwa: {
    manifestOptions: {
      background_color: '#007bbd',
    },
    name: 'Göteborgarna',
    themeColor: '#007bbd',
    msTileColor: '#007bbd',
    workboxOptions: {
      runtimeCaching: [
        {
          handler: 'NetworkFirst',
          options: {
            networkTimeoutSeconds: 5,
          },
          urlPattern:
            'https://polisen.se/api/events?locationname=G%C3%B6teborg',
        },
      ],
    },
  },
}
