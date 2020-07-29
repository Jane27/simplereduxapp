import React from 'react';
import styled from "styled-components";

const Container = styled.div`
	max-width: 500px;
	margin: 0 auto;
`;

const Row = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 10px;
	background-color: ${props => props.strip ? props.theme.bgPrimary : props.theme.bgHighlight};
`;

const Column = styled.div`
	color: ${props => props.theme.textPrimary}
`;

const TableCard = ({ data }) => {
	return (
		<Container>
			{data.map(({ key, value }, index) => (
				<Row key={key} strip={index % 2}>
					<Column>{key}</Column>
					<Column>{value}</Column>
				</Row>
			))}
		</Container>
	)
}

export default TableCard;