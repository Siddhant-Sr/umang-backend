'use strict';

/**
 * resource-manager controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::resource-manager.resource-manager');
