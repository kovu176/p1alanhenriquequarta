import axios from 'axios';

export const fetchCepData = async (cep) => {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    
    // O ViaCEP retorna 200 OK mesmo para CEPs inexistentes, mas com a flag "erro"
    if (response.data.erro) {
      return null;
    }

    const { logradouro, bairro, localidade, uf } = response.data;
    return {
      logradouro,
      bairro,
      cidade: localidade,
      estado: uf
    };
  } catch (error) {
    throw new Error('Erro ao consultar o serviço externo de CEP');
  }
};