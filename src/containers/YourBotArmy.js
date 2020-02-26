import React from 'react';
import BotCard from '../components/BotCard';

class YourBotArmy extends React.Component {
	renderBotCards = (myBots, removeBots) =>
		myBots.map(bot => {
			return <BotCard bot={bot} showBot={removeBots} />;
		});

	render() {
		const { myBots, removeBots } = this.props;
		return (
			<div className='ui segment inverted olive bot-army'>
				<div className='ui five column grid'>
					<div className='row bot-army-row'>
						{this.renderBotCards(myBots, removeBots)}
						Your Bot Army
					</div>
				</div>
			</div>
		);
	}
}

export default YourBotArmy;
