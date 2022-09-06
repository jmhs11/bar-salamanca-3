import carta from '../data/items.json';

const Carta = () => {
	const categories = [...new Set(carta.map(item => item.category))];
	return (
		<>
			{categories.map(item => (
				<div key={item}>
					<p>{item}</p>
					{carta.map(
						dish =>
							dish.category === item && (
								<div className='ml-4' key={dish.id}>
									{dish.name}
								</div>
							)
					)}
				</div>
			))}
		</>
	);
};

export default Carta;
