import React from 'react';
import Produto from './Produto';

const App = () => {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    senha: '',
    rua: '',
    numero: '',
    cidade: '',
    bairro: '',
    email: '',
    estado: '',
    cep: '',
  });

  const [status, setStatus] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((response) => {
        if (response.ok) {
          setStatus('Enviado com sucesso!');
          return response.json();
        } else {
          throw new Error('Falha no envio');
        }
      })
      .catch((error) => {
        setStatus('Não enviado. Erro: ' + error.message);
      });
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        id="nome"
        type="text"
        name="nome"
        value={form.nome}
        onChange={handleChange}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <label htmlFor="senha">Senha</label>
      <input
        id="senha"
        type="password"
        name="senha"
        value={form.senha}
        onChange={handleChange}
      />
      <label htmlFor="cep">Cep</label>
      <input
        id="cep"
        type="text"
        name="cep"
        value={form.cep}
        onChange={handleChange}
      />
      <label htmlFor="rua">Rua</label>
      <input
        id="rua"
        type="text"
        name="rua"
        value={form.rua}
        onChange={handleChange}
      />
      <label htmlFor="numero">Numero</label>
      <input
        id="numero"
        type="text"
        name="numero"
        value={form.numero}
        onChange={handleChange}
      />
      <label htmlFor="bairro">Bairro</label>
      <input
        id="bairro"
        type="text"
        name="bairro"
        value={form.bairro}
        onChange={handleChange}
      />
      <label htmlFor="cidade">Cidade</label>
      <input
        id="cidade"
        type="text"
        name="cidade"
        value={form.cidade}
        onChange={handleChange}
      />
      <label htmlFor="estado">Estado</label>
      <input
        id="estado"
        type="text"
        name="estado"
        value={form.estado}
        onChange={handleChange}
      />
      <button>Enviar</button>
      <div>{status}</div>
    </form>
  );
};

export default App;
