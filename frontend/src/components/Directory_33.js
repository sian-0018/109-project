import React from 'react';

import Body2 from './Body2';

import styles from './Directory_33.module.scss';

class Directory_xx extends React.Component {
	constructor() {
		super();

		this.state = {
			sections: [
				{
					idsum: 1,
					product: 'coffee',
					text:
						'喝咖啡已經是不可或缺的享受，越來越多人選擇自己在家裡沖咖啡，不只為興趣，也為了更好的咖啡品質。如果你已經，或者正打算要這麼做，那麼第一件你必須要知道的事情就是：好咖啡，來自高品質的咖啡豆。',
					img: '/img/coffee.png'
				},
				{
					idsum: 2,
					product: 'cake',
					text:
						'現在的烘焙店蛋糕上有些會用糖果來裝飾，或是巧克力片、水果片等等，像有一種用杯子做的蛋糕，它的上方加珠珠、棉花糖，英文字母的翻糖來做裝飾，或是用不同的顏色鮮奶油用擠花器來做裝飾，還有一種蛋糕叫做瑞士捲，它是用捲的，有一些裡面會包水果。',
					img: '/img/cake.png'
				},
				{
					idsum: 3,
					product: 'dessert',
					text:
						'忙碌的日子中，美味的甜點更成了撫慰人心的最佳良藥，不論是好吃又好拍的文青小店，或是最近掀起話題的甜點名店，甚至還有台式甜點大變身，這個月找一家令你心動的甜點店，好好享受少女心噴發的甜點時光吧！',
					img: '/img/dessert.png'
				}
			]
		};
	}

	render() {
		console.log('data', this.state.sections);
		return (
			<div className={styles.directory_menu}>
				{this.state.sections.map(({ text, product, idsum, img }) => (
					<Body2 key={idsum} text={text} img={img} product={product} />
				))}
			</div>
		);
	}
}

export default Directory_xx;
