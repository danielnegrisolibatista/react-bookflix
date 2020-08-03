import styled from 'styled-components';

export const BoxForm = styled.div`
  display: grid;
  grid-template-columns: 44% 54%;
  grid-column-gap: 2%;
  @media (max-width: 1400px) {
    grid-template-columns: 48% 50%;
  }
  @media (max-width: 800px) {
    grid-template-columns: 100%;
    grid-column-gap: 0;
  }
`;

export const Formulario = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const Color = styled.div`
  display: table;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  margin: auto 1.5rem auto 0;
`;

export const Listagem = styled.ul`
  margin-left: 3rem;
  list-style-type: none;

  span {
    margin-right: 1rem;
  }

  @media (max-width: 800px) {
    margin-left: 0;
  }
`;

export const ListagemItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  min-height: 2.5rem;
  margin-bottom: 0.5rem;
`;

export const ListagemLinha = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-end;
  min-height: 2.5rem;
`;
