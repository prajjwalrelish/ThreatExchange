import React from "react";
// import './App.css';
class Dd extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: {},
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch(
`${process.env.REACT_APP_API_URL}/api/scrap-domain?format=json`)
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div className = "App">
			<h1> Fetch data from an api in react </h1> {
				// items.map((item) => (
				<ol  >
					User_Name: { items.count },
					Full_Name: { items.next },
					User_Email: { items.previous }
					</ol>
				
			}
		</div>
	);
}
}

export default Dd;
