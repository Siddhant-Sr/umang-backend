'use strict';

/**
 * resource-manager service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::resource-manager.resource-manager');
