import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { fetchCharacterDetail } from "../actions/character";
import TableCard from '../components/TableCard';

const Wrapper = styled.div`

`;

const Title = styled.h3`
  color: ${(props) => props.theme.textPrimary};
  margin-top: 50px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 20px;
  cursor: pointer;
`;

const CharacterDetail = ({ history, match, fetchCharacterDetail, data = {} }) => {
  const { id } = match.params;

  useEffect(() => {
    fetchCharacterDetail(id);
  }, [match.params.id]);
  
  const content = Object.keys(data).map((key) => ({ key, value: data[key] }));
  return (
    <Wrapper>
      <Title>Character Detail Page</Title>
      <TableCard data={content} />
      <Button onClick={() => history.goBack()}>Back</Button>
    </Wrapper>
  );
};

const mapStateToProps = ({ character }) => ({
  searchTerm: character.searchTerm,
  data: character.detail,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCharacterDetail: (id) => {
    return dispatch(fetchCharacterDetail(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetail);
