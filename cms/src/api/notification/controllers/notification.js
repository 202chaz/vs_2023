'use strict';

/**
 * notification controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::notification.notification', ({ strapi }) => ({
  async create(ctx) {
    const { meta } = ctx.request.body;

    strapi.$io.raw(`new-cam`, meta);

    return 200
  }
}));
