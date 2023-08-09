import './button.css';

const Button = props => {
	const { title,oncheckout,disable,type,} = props;

	return (
		<button
			className={`btn ${(type === 'add' && 'add') ||
				(type === 'remove' && 'remove') ||
				(type === 'checkout' && 'checkout') ||
				(disable === true && 'disabled')}`}
			onClick={()=> oncheckout()}  
			disabled={disable}
			>
			{title}
		</button>
	);
};

export default Button;