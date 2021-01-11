import React from 'react';

import MenuItem_xx from './MenuItem_xx';

import styles from './Directory_xx.module.scss';

class Directory_xx extends React.Component {
	constructor() {
		super();

		this.state = {
			sections: [
				{
					idsum: 15,
					p_id: 2,
					img: '1',
					head: '湯姆貓與傑利鼠的 切達起司夾心蛋糕/五吋',
					money: '550',
					body:
						'靈感來自湯姆貓與傑利鼠裡面的卡通起司，外層乳酪慕斯使用了一樣顏色的切達乾酪，還有法國kiri乳酪，所以淺橘色的部分味道是鹹甜鹹甜，卻又不失奶香味道的乳酪慕斯。 內層是kiri 乳酪慕斯，加入了煉乳提升風味，是奶味濃郁的夾心。',
					link: 'https://www.pinkoi.com/product/rAfXfkb8?category=10&ref_itemlist=KbMF3e5d'
				},
				{
					idsum: 16,
					p_id: 2,
					img: '2',
					head: '6吋小山園抹茶生巧克力蛋糕/超濃厚抹茶醬/經典款非嚐不可',
					money: '650',
					body: '黑手甜點-經典系列 小山園抹茶生巧克力蛋糕',
					link: 'https://www.pinkoi.com/product/HnqRgTCe?category=10&ref_itemlist=KbMF3e5d'
				},
				{
					idsum: 17,
					p_id: 2,
					img: '3',
					head: '【LeFRUTA朗芙】草莓玫瑰伯爵蛋糕 / 6吋',
					money: '490',
					body: '草莓玫瑰伯爵茶蛋糕 藝人劉伊心彌月蛋糕指定款！ 柔嫩的甜美女孩感～爆棚少女心',
					link: 'https://www.pinkoi.com/product/nAM3J7DZ?category=10&ref_itemlist=KbMF3e5d'
				},
				{
					idsum: 18,
					p_id: 2,
					img: '4',
					head: '【小茶捲】金萱烏龍茶捲 ‧ 黃梔烏龍茶捲 ‧ 彌月 ‧ 生日',
					money: '387',
					body:
						'【100%職人手作，細緻綿密，清爽不膩】 小茶法式甜點團隊每日限量手工生產，將職人對技術的熱情，貫注在每新鮮出爐的小茶捲上。 回歸新生般的純淨，以茶入味自然呈現食材原味，鬆軟綿密、清爽不膩。',
					link: 'https://www.pinkoi.com/product/x4cRm3Wx?category=10&ref_itemlist=KbMF3e5d'
				},
				{
					idsum: 19,
					p_id: 2,
					img: '5',
					head: 'AOP極純布蕾蛋糕',
					money: '150',
					body: '探索食材純粹的原味，選用諾曼地產區金牌獎的奶油，結合職人匠心手藝，打造極致純淨的風味！ 純粹食材．幸福享用',
					link: 'https://www.pinkoi.com/product/5QhLurxu?category=10&ref_itemlist=KbMF3e5d'
				},
				{
					idsum: 20,
					p_id: 2,
					img: '6',
					head: '大甲芋泥蛋糕',
					money: '890',
					body: '永遠吃不膩的經典 新鮮大甲芋頭與牧場鮮奶綿密的交織融合',
					link: 'https://www.pinkoi.com/product/s8pAATsP?category=10&ref_itemlist=KbMF3e5d'
				}
			]
		};
	}

	render() {
		console.log('data', this.state.sections);
		return (
			<div className={styles.directory_menu}>
				{this.state.sections.map(({ title, imageUrl, id, size }) => (
					<MenuItem_xx key={id} title={title} imageUrl={imageUrl} size={size} />
				))}
			</div>
		);
	}
}

export default Directory_xx;
