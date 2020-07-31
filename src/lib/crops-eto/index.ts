import API from "./api";

// crops logic
function getCrops() {
  return API.getCrops().then((response) => response.data);
}

function postETc(payload: any) {
  return API.postETc(payload);
}

export default {
  getCrops,
  postETc,
};
