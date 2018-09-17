import { Article } from '../models';

export const fetchDataAction = (url: string) => dispatch => {
	dispatch(requestData(url))
	return fetch(url)
		.then(response => response.json())
		.then(json => dispatch(receiveData(url,json)))
}

const requestData = (url: string) => ({
  type: 'REQUEST_DATA',
  url
});

const receiveData = (url: string, json: Article[]) => ({
  type: 'RECEIVE_DATA',
  url,
  json
});