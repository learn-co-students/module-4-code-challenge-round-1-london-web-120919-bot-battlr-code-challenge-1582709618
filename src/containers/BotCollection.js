import React from 'react';
import BotCard from '../components/BotCard';

class BotCollection extends React.Component {
	renderBotCards = (bots, addBots) =>
		bots.map(bot => {
			return <BotCard bot={bot} moveBots={addBots} key={bot.id} />;
		});
	render() {
		const { bots, addBots } = this.props;
		return (
			<div className='ui four column grid'>
				<div className='row'>
					{this.renderBotCards(bots, addBots)}
					Collection of all bots
				</div>
			</div>
		);
	}
}

export default BotCollection;
