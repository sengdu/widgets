import React from 'react';
import Accordion from './components/Accordion';

const items = [
	{
		title: 'what is react',
		content: 'react is front-end programming language '
	},
	{
		title: 'why use react?',
		content: 'react is a among favourit front end web engineer'
	},{
		title: 'what is ur name bha adfasdfasfafdafasf',
		content: 'my name sengdu af adfhjhdfkahdfla'
	}
];
export default () => {
	return(
		<div className="ui container">
			<Accordion items = {items} />
		</div>
	)
}; 
