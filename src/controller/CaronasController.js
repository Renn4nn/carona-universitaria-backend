import * as CaronaModel from '../models/caronas.js';

export const listar = (req, res) => {
    CaronaModel.listarCaronas((erro, resultados) => {
        if (erro) return res.status(500).json(erro);
        res.json(resultados);
    });
};

export const buscarPorId = (req, res) => {
    CaronaModel.buscarCaronaPorId(req.params.id, (erro, resultados) => {
        if (erro) return res.status(500).json(erro);
        res.json(resultados);
    });
};

export const criar = (req, res) => {
    CaronaModel.criarCarona(req.body, (erro, resultado) => {
        if (erro) return res.status(500).json(erro);

        res.status(201).json({
            mensagem: 'Carona criada com sucesso',
            id: resultado.insertId
        });
    });
};

export const atualizar = (req, res) => {
    CaronaModel.atualizarCarona(
        req.params.id,
        req.body,
        (erro) => {
            if (erro) return res.status(500).json(erro);

            res.json({
                mensagem: 'Carona atualizada com sucesso'
            });
        }
    );
};

export const deletar = (req, res) => {
    CaronaModel.deletarCarona(req.params.id, (erro) => {
        if (erro) return res.status(500).json(erro);

        res.json({
            mensagem: 'Carona removida com sucesso'
        });
    });
};