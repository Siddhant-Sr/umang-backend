'use strict';

/**
 * story-of-change service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::story-of-change.story-of-change');
