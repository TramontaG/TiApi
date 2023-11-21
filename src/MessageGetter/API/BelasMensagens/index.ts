import axios from 'axios';

const BelasMensagensApi = axios.create({
	baseURL: 'https://www.belasmensagens.com.br/wp-json/wp/v2/',
});

BelasMensagensApi.interceptors.response.use(response => {
	// console.log(response);
	// const newData = response.data.split('<script>')[0];
	// return {
	// 	...response,
	// 	data: JSON.parse(newData),
	// };
	return response;
});

export default BelasMensagensApi;
