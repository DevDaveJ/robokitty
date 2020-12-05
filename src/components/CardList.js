import React from 'react';
import Card from './Card';

const CardList = ( {robots} ) => {
	const cardComponent = robots.map((user) => {
		return (
		    <Card key={user.id} id={user.id} name={user.name} email={user.email} />
		);
	});

	return(
		<React.StrictMode>
			{cardComponent}
		</React.StrictMode>
	);
}

export default CardList;