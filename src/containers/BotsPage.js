import React from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import BotSpecs from '../components/BotSpecs';

class BotsPage extends React.Component {
	state = {
		bots: [],
		myBots: [],
		showPage: false,
		selectedBot: null
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
				myBots: [...myBots, id],
				showPage: false
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

	showBot = id => {
		const { bots } = this.state;

		this.setState({
			showPage: true,
			selectedBot: bots.find(bot => bot.id === id)
		});
	};

	showPageToggle = () => {
		this.setState({
			showPage: false
		});
	};
	//start here with your code for step one

	render() {
		const { bots, showPage, selectedBot } = this.state;

		{
			if (showPage) {
				return (
					<div>
						<YourBotArmy
							removeBots={this.removeBots}
							myBots={this.myBotsFind()}
						/>
						<BotSpecs
							bot={selectedBot}
							addBots={this.addBots}
							showPageToggle={this.showPageToggle}
						/>
					</div>
				);
			} else {
				return (
					<div>
						<YourBotArmy
							removeBots={this.removeBots}
							myBots={this.myBotsFind()}
						/>
						<BotCollection bots={bots} showBot={this.showBot} />
					</div>
				);
			}
		}
	}
}

export default BotsPage;
