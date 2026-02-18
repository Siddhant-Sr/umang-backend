'use strict';

/**
 * resource-manager router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::resource-manager.resource-manager');
