import React from 'react';
import Accordion from './components/Accordion';

const items = [
	{
		title: 'what is react',
		content: 'react is fort-end programming language '
	},
	{
		title: 'why use react?',
		content: 'react is a among favourit engineer'
	},{
		title: 'what is ur name',
		content: 'my name sengdu'
	}
];
export default () => {
	return(
		<div className="ui container">
			<Accordion items = {items} />
		</div>
	)
}; 