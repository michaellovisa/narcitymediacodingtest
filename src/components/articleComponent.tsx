import * as React from "react";
import { Col } from 'react-bootstrap';
import { Motion, spring } from "react-motion";
import { Article } from '../models';
import '../assets/css/articleComponent.css';

interface State {
	clicked: boolean
}

export class ArticleComponent extends React.Component<Article, State> {
	constructor(props: Article) {
	    super(props);
	    this.state = {
	    	clicked: false
	    };
  	}
	
	handleClick = () => {
		this.setState({clicked:!this.state.clicked});
	}

	returnCategory = (value) => {
		switch (value) {
			case "5903ed4e969426107e75ba6d":
				return "NEWS";
			case "5903ed4e969426107e75ba73":
				return "TRAVEL";
			case "5b312c639dac291e8d52c180":
				return "ARIZONA";
			case "59ca896cd90dcf0696df3e25":
				return "DIVERTISSEMENT";
			case "595d4aa52f308878462ec380":
				return "NEWS";
			case "5903ed4f969426107e75cc40":
				return "TRAVEL";
			case "599471b19f42c969a11bb2cb":
				return "VIE";
			case "5903ed4f969426107e75cc3e":
				return "THINGS TO DO IN VAN";
			case "598c9f47f311795c933014b4":
				return "NOUVELLES";
			case "5903ed4c969426107e75a0df":
				return "NEWS";	
			case "5952a9239e272a154877b5ff":
				return "GOSSIP";	
			case "598e1ae3d1df7e6259f4f536":
				return "LIFE";	
			case "59ca88efa4ffe806950ae4c0":
				return "ENTERTAINMENT";	
			case "5903ed4d969426107e75a2e8":
				return "NOUVELLES";	
			case "5a5f8c5380e0327353e319c9":
				return "THINGS TO DO IN DETROIT";	
			case "5b9152b1b2cf89653ce3fbb2":
				return "OCCUPATION DOUBLE";
			case "5b119034040ded4293fd108a":
				return "THINGS TO DO IN TAMPA";
			case "598c9c43057f9a5c875157dc":
				return "POTINS";
			case "5903ed4d969426107e75a2ef":
				return "LIFESTYLE";
			case "5903ed4d969426107e75a2eb":
				return "EN VEDETTE";
			case "5b11a117040ded4293fd113d":
				return "THINGS TO DO IN MIAMI";
			case "5b71e558db28196193613f34":
				return "THINGS TO DO IN BALTIMORE";
			case "5952a8fcafff1d154712a10b":
				return "DATING";
			case "5903ed4e969426107e75ba68":
				return "TORONTO";
			case "5903ed4d969426107e75b5e4":
				return "TRAVEL";
			case "5903ed4e969426107e75ba70":
				return "LIFESTYLE";
			case "5903ed4d969426107e75a2ed":
				return (`QUOI FAIRE \u{000C0} MONTR\u{000C9}AL`);		
			case "5903ed4d969426107e75b5e1":
				return "THINGS TO DO IN OTT";
			case "5903ed4e969426107e75ba72":
				return "THINGS TO DO IN TORONTO";
			case "5952a8e8afff1d154712a107":
				return "TRAVEL";
			case "5903ed4d969426107e75a2ec":
				return "MEILLEUR DE MONTR\u{000C9}AL";	
			case "5903ed4d969426107e75a2ee":
				return "VOYAGE";
			case "5abbd46b463fca4679349da2":
				return "THINGS TO DO";
			case "5b9178a2cdf2b477673116c6":
				return "THINGS TO DO IN RICHMOND";
			case "5903ed4e969426107e75ba1c":
				return "BEST OF ST. JOHN'S";
			case "5aba88c9573e0b466e5f0656":
				return "THINGS TO DO IN PHILADELPHIA";
			case "5903ed4c969426107e75a017":
				return "NEWS";
			default:
				return "";
		}
	}

	render() {

		return (
		    <Col xs={12} sm={6} md={4}>

		    	<div className="article-container" onClick={this.handleClick}>

			    	<Motion style={{x: spring(this.state.clicked ? 0 : 100)}}>
					          {({x}) =>
					            <div className="article-tile main-content">
				    				<img style={{width:`${x}%`}} 
				    					 className="article-image" 
				    					 src={this.props.media}
				    				/>
				    				<h5 className="article-category">
				    					{this.returnCategory(this.props.topic)}
				    				</h5>
				    				<h3 className="article-title">
				    					{this.props.title}
				    				</h3>
				    			</div>
					          }
					</Motion>

					<div className="article-tile secondary-content">
						<h4 className="article-subtitle">
							{this.props.subtitle}
						</h4>
					</div>

				</div>

	    	</Col>    
		);
	}
}






