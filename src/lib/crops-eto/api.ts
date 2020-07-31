import axios from "axios";

const endpoints = {
  crops: "crops",
  eto: "eto",
  etc: "etc",
};

const axiosInstance = axios.create({
  baseURL: "https://cfc-waterfootprint-bff-dev.mybluemix.net/",
  timeout: 10000,
});

/**
 * Get all available crop types
 */
function getCrops() {
  return axiosInstance.get(endpoints.crops);
}

/**
 *
 * @param {Object} payload An object that contains the request body with lat, lng and datetime for an specific crop type e.g:
 * {
    "georef": {
        "lat": -33.416889,
        "lon": -70.606705
    },
    "crop": {
        "Category": "cereals",
        "Name": "winter wheat (with non-frozen soils)",
        "start": "2020-07-01",
        "end": "2020-07-15"

    },
    "crop_stages":{
        "Dev": "140.0", 
        "Init": "30.0", 
        "Late": "30.0", 
        "Mid": "40.0"
    }
}
 *
 * @return Evapotranspiration under standard conditions (ETc) information in an object with etc property that contains day and etc array, e.g: {
  "etc": {
    "days": [
      "2020-07-01",
      "2020-07-02",
     
    ],
    "etc": [
      0.7656155522332735,
      1.1204681241752734,
    ]
  }
}
 */
function postETc(payload: any) {
  return axiosInstance.post(endpoints.etc, payload);
}

/**
 *
 * @param {Object} payload an object with user filled data, e.g:
 * {
    "lat": -33.416889,
    "lon": -70.606705,
    "start": "2020-07-01",
    "end": "2020-07-15"
 *
 * @return Evotranspiration information in a single property called eto, e.g:
 * {
  "eto": {
    "2020-07-01": 1.0937365031903907,
    "2020-07-02": 1.6006687488218192,
    "2020-07-03": 1.5817691420049782,
    "2020-07-04": 1.5307806043106897,
    "2020-07-05": 1.2024766721103473,
    "2020-07-06": 1.1055335786828326,
    "2020-07-07": 1.1366377838479345,
    "2020-07-08": 1.1677419890130365,
    "2020-07-09": 1.427711545913369,
    "2020-07-10": 1.45515169826208,
    "2020-07-11": 1.5555273171348736,
    "2020-07-12": 1.6821505258338834,
    "2020-07-13": 2.0164499797706172,
    "2020-07-14": 2.1399852149106904,
    "2020-07-15": 2.1932194334605946
  }
}
 */

function postETo(payload: any) {
  return axiosInstance.post(endpoints.eto, payload);
}

export default {
  getCrops,
  postETc,
  postETo,
};
