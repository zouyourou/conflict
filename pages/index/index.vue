<template>
	<view class="content">
		<!-- <image class="logo" src="../../static/logo.png"></image> -->
		<view>
			<text class="title">{{title}}</text>

			<view>
				<view class="">{{interactText}}</view>
			</view>
			<view> </view>
			<view>游戏状态
				<view>能量:{{energy}}</view>
				<view>回合:{{rounds}}</view>
				<view v-for="player in playerList">
					玩家{{player.name}}金钱:{{player.money}}
				</view>
			</view>
			<button @click="getMoney">赚取金钱</button>
			<button @click="getEnergy">产生能量</button>
			<button @click="restart">重新开始游戏</button>
			<view>游戏设置
				<view class="">能量总数<input type="number" v-model="energySet"></view>
				<view class="">回合数<input type="number" v-model="roundsSet" /></view>
				<view class="">玩家数<input type="number" v-model="playerNumSet" /></view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'Conflict',
				energy: 100,
				rounds: 20,
				playerList: [{
					'name': 1,
					'money': 0
				}, {
					'name': 2,
					'money': 0
				}, {
					'name': 3,
					'money': 0
				}],
				interactText: '游戏开始...',
				roundPlayers: '',
				roundsSet: 20,
				energySet: 100,
				playerNumSet: 3,
				currentPlayer: ''
			}
		},
		watch: {
			roundPlayers: function(val, oldval) {
// 				if (val.length == 0) {
// 					this.roundPlayers = this.playerList.slice();
// 				}
			},
			energy: function(val, oldval) {
				if (val <= 0) {
					uni.showModal({
						content: '游戏结束'
					});
				}
			},
			rounds: function(val, oldval) {
				if (val = 0) {
					uni.showModal({
						content: '游戏结束'
					});
				}
			},
			currentPlayer: function(val, oldVal) {
				console.log(this.currentPlayer.name);
				this.interactText = `玩家${this.currentPlayer.name} 行动...`;
			}
		},

		onLoad() {
			this.roundPlayers = this.playerList.slice();
			this.currentPlayer = this.roundPlayers[0];
		},
		methods: {
			getMoney: function(event) {
				var chanceType = 0;
				var chanceName = '获得金钱';
				var chanceEarn = Math.round(Math.random() * 10);
				var chanceCost = chanceEarn
				uni.showModal({
					content: `${chanceName} : ${chanceEarn}`,
					showCancel: false,
					success: (dialogRes) => {
						if (dialogRes.confirm) {
							if (chanceType == 0) {
								this.interactText = `${this.currentPlayer.name} 获得金钱${chanceEarn}...但能量消耗`;
								this.currentPlayer.money = this.currentPlayer.money + chanceEarn;
								this.energy = this.energy - chanceCost;
							} else {
								if (this.currentPlayer.money - chanceCost < 0) {
									uni.showToast({
										icon: 'none',
										title: '余额不足'
									});
								} else {
									this.interactText = `${this.currentPlayer.name} 产生能量${chanceEarn}...但能量金钱`;
									this.energy = this.energy + chanceEarn;
									this.currentPlayer.money = this.currentPlayer.money - chanceCost;
								}
							}
						}
						this.roundPlayers.shift();
						if (this.roundPlayers.length == 0) {
							this.roundPlayers = this.playerList.slice();
							this.rounds--;
						}
						this.currentPlayer = this.roundPlayers[0];
					}
				})
			},
			getEnergy: function(event) {
				var chanceType = 1;
				var chanceName = false ? '获得金钱' : '产生能量'
				var chanceEarn = Math.round(Math.random() * 10);
				var chanceCost = chanceEarn
				uni.showModal({
					content: `${chanceName} : ${chanceEarn}`,
					showCancel: false,
					success: (dialogRes) => {
						if (dialogRes.confirm) {
							if (chanceType == 0) {
								this.interactText = `${this.currentPlayer.name} 获得金钱${chanceEarn}...但能量消耗`;
								this.currentPlayer.money = this.currentPlayer.money + chanceEarn;
								this.energy = this.energy - chanceCost;
							} else {
								if (this.currentPlayer.money - chanceCost < 0) {
									uni.showToast({
										icon: 'none',
										title: '余额不足'
									});
								} else {
									this.interactText = `${this.currentPlayer.name} 产生能量${chanceEarn}...但能量金钱`;
									this.energy = this.energy + chanceEarn;
									this.currentPlayer.money = this.currentPlayer.money - chanceCost;
								}
							}
						}
						this.roundPlayers.shift();
						if (this.roundPlayers.length == 0) {
							this.roundPlayers = this.playerList.slice();
							this.rounds--;
						}
						this.currentPlayer = this.roundPlayers[0];
					}
				})
			},
			restart: function() {
				this.rounds = this.roundsSet;
				this.energy = this.energySet;
				for (let player of this.playerList) {
					player.money = 0;
				}
				this.playerList = new Array();
				for (var i = 1; i <= this.playerNumSet; i++) {
					this.playerList.push({
						name: i,
						money: 0
					})
				}
				this.roundPlayers = this.playerList.slice();
				this.currentPlayer = this.roundPlayers[0];
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
