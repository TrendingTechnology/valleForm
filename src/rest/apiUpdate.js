import getFieldsParams from '../fieldsControl/getFieldsParams';

/**
 * TODO: Add JSDocs
 * 
 */

const apiUpdate = (
  baseApi,
  canonicalApi,
  customParams = {},
  _id,
  feedbackCb,
  formCb,
  token,
  closeSpeedDial,
  ) => {

  /**
   * Get all form values
   * 
   */

  const fieldsParams = getFieldsParams(_id);

  if (fieldsParams) {

    /**
     * API url
     * 
     */

    const apiPath = `${baseApi}${canonicalApi}`;

    /**
     * Request configs
     * 
     */

    const method = 'PUT';

    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    /**
     * Resquest data structure
     * 
     */

    const body = JSON.stringify({
      evento: {
        ...customParams,
        dados: fieldsParams
      }
    });

    /**
     * HTTP PUT
     * 
     */
    closeSpeedDial();

    fetch(apiPath, { method, headers, body })
      .then(res => res.json())
      .then(data => {

        /**
         * Request success
         * 
         */

        feedbackCb(data.evento.mensagem, 'success');
        formCb();

      })
      .catch(() => {

        /**
         * Request error
         * 
         */

        feedbackCb('Erro interno no servidor', 'error');

      });

  } else {

    /**
     * Form error
     * 
     */

    feedbackCb('Erro ao preencher o formulário', 'error');

  }

}

export default apiUpdate;
