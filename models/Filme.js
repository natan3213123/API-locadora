module.exports = (sequelize, DataTypes) => {
    const Filme = sequelize.define('Filme', {
      nome: DataTypes.STRING,
      diretor: DataTypes.STRING,
      descricao: DataTypes.STRING,
      dataPublicacao: DataTypes.DATE,
      genero: DataTypes.STRING,
      roteirista: DataTypes.STRING,
      elenco: DataTypes.STRING,
      duracao: DataTypes.STRING,
      classificacaoEtaria: DataTypes.STRING,
      sinopse: DataTypes.STRING,
    });
  
    return Filme;
  };
  