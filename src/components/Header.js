import logo from "../images/business-deal-6922628_1280.png";

const Header = () => {
	const today = new Date().toString().slice(0, 10);

	return (
		<header>
			<div className="text-container">
				<h1>Dealfinder</h1>
				<p>{today}</p>
			</div>
			<div className="logo-container">
				<img src={logo} alt="logo"></img>
			</div>
		</header>
	);
};

export default Header;
