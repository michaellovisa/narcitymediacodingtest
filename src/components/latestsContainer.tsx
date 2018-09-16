import * as React from 'react';
import { connect } from 'react-redux';
import { LatestsComponent } from './latestsComponent';
import { fetchDataAction } from '../actions';
import { State } from '../models';

const mapStateToProps = (state:State) => ({
  	articles: state.articles,
  	isFetching : state.isFetching
});

const mapDispatchToProps = (dispatch) => ({
	fetchData: (url: string) => dispatch(fetchDataAction(url)),
});

export const LatestsContainer = connect(mapStateToProps,mapDispatchToProps)(LatestsComponent);
