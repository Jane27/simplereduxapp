import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { search } from "../actions/character";
import { getCharactersBySearchTerm } from '../selectors/character';

const Title = styled.h3`
  color: ${(props) => props.theme.textPrimary};
  margin-top: 50px;
`;

const Item = styled.div`
	color: ${(props) => props.theme.textPrimary};
	padding: 5px 0;
`;

const Content = styled.div`
	display:flex;
	flex-direction: column;
	align-items: flex-start;
	margin:0 auto;
	max-width:300px;
`;

const SearchBox = styled.input`
	margin: 20px;
	width: 200px;
	height: 20px;
`;

const CharacterList = ({
  search,
  searchTerm,
  displayedData,
  fetchCharacterList,
}) => {
  useEffect(() => {
    fetchCharacterList();
  }, []);

  return (
    <div>
      <Title>Character List Page</Title>
      <SearchBox
        type="text"
        placeholder="Type name to search"
        value={searchTerm}
        onChange={(e) => search(e.target.value)}
      ></SearchBox>
      <Content>
        {displayedData.map(({ _id, name }) => (
          <Item key={_id}>
            <Link to={`/character/${_id}`}>{name}</Link>
          </Item>
        ))}
      </Content>
    </div>
  );
};

const mapStateToProps = ({ character }) => ({
  data: character.data,
  displayedData: getCharactersBySearchTerm(character),
  searchTerm: character.searchTerm,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCharacterList: () => {
    return dispatch({ type: "CHARACTER/FETCH_ALL_START" });
  },
  search: (term) => {
    return dispatch(search(term));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
