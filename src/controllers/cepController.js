import { fetchCepData } from '../services/cepService.js';

export const getCepHandler = async (request, reply) => {
  const { cep } = request.params;

  // Validação: 8 dígitos numéricos
  const cepRegex = /^[0-9]{8}$/;
  
  if (!cepRegex.test(cep)) {
    return reply.status(400).send({ 
      error: 'Formato de CEP inválido. Envie apenas os 8 dígitos numéricos.' 
    });
  }

  try {
    const data = await fetchCepData(cep);

    if (!data) {
      return reply.status(404).send({ error: 'CEP não encontrado.' });
    }

    return reply.send(data);
  } catch (error) {
    return reply.status(500).send({ error: error.message });
  }
};