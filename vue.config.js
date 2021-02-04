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
    exclude: [/swagger-ui/],
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
        {
          handler: 'NetworkFirst',
          options: {
            networkTimeoutSeconds: 5,
          },
          urlPattern:
            'https://data.riksdagen.se/personlista/?iid=&fnamn=&enamn=&f_ar=&kn=&parti=&valkrets=G%C3%B6teborgs+kommun&rdlstatus=&org=&utformat=json&sort=parti&sortorder=asc&termlista=',
        },
      ],
    },
  },
}
