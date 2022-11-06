const BASE_URL = "https://test.dev.cupist.de";

export function todayRecommend() {
  return fetch(`${BASE_URL}/introduction`).then((response) => response.json());
}

export function addRecommend() {
  return fetch(`${BASE_URL}/introduction/additional`).then((response) =>
    response.json()
  );
}

export function myProfile() {
  return fetch(`${BASE_URL}/profile`).then((response) => response.json());
}
