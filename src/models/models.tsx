export interface Article {
	_id: string,
	title: string,
	subtitle: string,
	shares: number,
	media: string,
	topic: string,
	name: string,
	score: number,
	url: string,
	language: string
}

export interface State {
	articles:Article[],
	isFetching:boolean
}