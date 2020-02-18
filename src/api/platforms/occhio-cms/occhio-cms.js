import axios from "axios";
const rapiURL = "https://www.occhio.de/rapi/node/";
const queryParameters = "?_format=json&language=en";

export default {
  getPageData(nodeId) {
    return new Promise((resolve, reject) => {
      axios
        .get(rapiURL + nodeId + queryParameters, {
          credentials: true,
          headers: {
            "X-Requested-With": "webapp"
          }
        })
        .then(res => {
          // res.body.routes = { ...res.body.routes, ...mockRoutes };
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}