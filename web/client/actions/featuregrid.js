/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const SELECT_FEATURES = 'SELECT_FEATURES';

function selectFeatures(geometries) {
    return {
        type: SELECT_FEATURES,
        geometries: geometries
    };
}

module.exports = {
    SELECT_FEATURES,
    selectFeatures
};
