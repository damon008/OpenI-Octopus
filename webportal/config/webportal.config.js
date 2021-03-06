// Copyright (c) Microsoft Corporation
// All rights reserved.
//
// MIT License
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
// documentation files (the "Software"), to deal in the Software without restriction, including without limitation
// the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
// to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
// BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


// module dependencies
const dotenv = require('dotenv');


dotenv.config();

// get config from environment variables
let config = {
  restServerUri: process.env.REST_SERVER_URI,
  prometheusUri: process.env.PROMETHEUS_URI,
  yarnWebPortalUri: process.env.YARN_WEB_PORTAL_URI,
  grafanaUri: process.env.GRAFANA_URI,
  k8sDashboardUri: process.env.K8S_DASHBOARD_URI, 
  k8sApiServerUri: process.env.K8S_API_SERVER_URI, 
  exporterPort: process.env.EXPORTER_PORT,
  orderServiceUrl: process.env.ORDER_SERVICE_URL,
  clusterName: process.env.CLUSTER_NAME,
// for debug config
  REPLACEDCOMMAND: "sleep 1800",
  DEBUGVC: "vc1",
// for spec
  CPURATIO: 2,
  MEMRATIO: 8196,

// for competition
  COMPETITIONUSER: "pai_admin_username",
  COMPETITIONVC: "vc2",
};

const dev_default_config = require("./webportal.config.dev");

for(let key in config){
  config[key] = config[key] || dev_default_config[key];
}

// module exports
module.exports = config;