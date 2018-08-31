import axios from 'axios';
import getFieldsParams from '../fieldsControl/getFieldsParams';

export default (baseApi, canonicalApi, customParams = {}, _id, feedbackCb, formCb) => {

	const fieldsParams = getFieldsParams();

	if (fieldsParams) {

		const apiPath = `${baseApi}${canonicalApi}/${_id}`;
		const params = Object.assign(customParams, getFieldsParams());

		axios.put(apiPath, params)
				 .then(res => {
						feedbackCb('Dados atualizados com sucesso', 'success');
						formCb();
					})
				 .catch(err => feedbackCb('Erro interno no servidor', 'error'))

	} else {

		feedbackCb('Erro ao preencher o formulário', 'error');

	}

}
