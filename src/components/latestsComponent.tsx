import * as React from "react";
import { ArticleComponent } from './articleComponent';
import { Grid, Row } from 'react-bootstrap';
import { State, Article } from '../models';

interface Props {
	articles: Article[],
  	isFetching : boolean,
	fetchData: (url: string) => void;
}

const url = "https://www.narcity.com/lmlsug.json";

export class LatestsComponent extends React.Component<Props, {}> {

  	componentDidMount(){
		this.props.fetchData(url);
 	}

  	render() {
    	return (
    		<Grid>
    			<Row>
			    	{
			    		this.props.articles.map(article =>
					    	    <ArticleComponent 	key={article._id}
					    	    					_id={article._id}
													title={article.title}
													subtitle={article.subtitle}
													shares={article.shares}
													media={article.media}
													topic={article.topic}
													name={article.name}
													score={article.score}
													url={article.url}
													language={article.language}
								/>
			    		)
			    	}
    			</Row>
    		</Grid>
    	);
  	}
}