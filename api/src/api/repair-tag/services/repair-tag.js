'use strict';

/**
 * repair-tag service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::repair-tag.repair-tag');
