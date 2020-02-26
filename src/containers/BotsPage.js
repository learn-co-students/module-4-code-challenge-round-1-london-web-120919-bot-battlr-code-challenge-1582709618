import React from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

class BotsPage extends React.Component {
	state = {
		bots: [],
		myBots: []
	};

	componentDidMount() {
		this.getAllBots();
	}

	getAllBots() {
		fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
			.then(res => res.json())
			.then(bots =>
				this.setState({
					bots
				})
			);
	}

	addBots = id => {
		const { myBots } = this.state;

		if (!myBots.includes(id)) {
			this.setState({
				myBots: [...myBots, id]
			});
		}
	};

	removeBots = id => {
		const { myBots } = this.state;

		this.setState({
			myBots: myBots.filter(bot => bot !== id)
		});
	};

	myBotsFind = () => {
		const { bots, myBots } = this.state;

		return bots.filter(bot => myBots.includes(bot.id));
	};
	//start here with your code for step one

	render() {
		const { bots } = this.state;
		return (
			<div>
				<YourBotArmy removeBots={this.removeBots} myBots={this.myBotsFind()} />
				<BotCollection bots={bots} addBots={this.addBots} />
			</div>
		);
	}
}

export default BotsPage;
