module.exports = ({ env }) => ({
  io: {
    enabled: true,
    config: {
      IOServerOptions: {
        cors: { origin: [process.env.ADMIN_APP_HOST, process.env.MEDIA_SERVER], methods: ["GET", "POST"] },
      },
      contentTypes: {
        "notification": "*",
      },
      events:[
        {
          name: "connection",
          handler: ({ strapi }, socket) => {
            strapi.log.info(`[io] new connection with id ${socket.id}`);
            strapi.$io.raw(`client-connected`);
          },
        },
        {
          name: "connect_error",
          handler: ({ strapi }, socket) => {
            strapi.log.info(`[io] new connection error ${socket.id}`);
          },
        }
      ]
    },
  },
});

