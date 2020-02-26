import React from 'react';
import BotCard from '../components/BotCard';

class BotCollection extends React.Component {
	renderBotCards = (bots, showBot) =>
		bots.map(bot => {
			return <BotCard bot={bot} showBot={showBot} key={bot.id} />;
		});
	render() {
		const { bots, showBot } = this.props;
		return (
			<div className='ui four column grid'>
				<div className='row'>
					{this.renderBotCards(bots, showBot)}
					Collection of all bots
				</div>
			</div>
		);
	}
}

export default BotCollection;
