import { Text } from 'src/ui/text';
import plane from 'src/images/plane.png';
import clsx from 'clsx';
import { type ArticleStateType } from 'src/constants/articleProps';

import styles from './Article.module.scss';

type ArticleProps = {
	articleState: ArticleStateType;
};

export const Article = ({ articleState }: ArticleProps) => {
	const isWide = articleState.contentWidth.className === 'width-wide';

	return (
		<article
			className={clsx(styles.article, {
				[styles.article_wide]: isWide,
			})}>
			<div className={styles.titleDescription}>
				<Text as='h1' size={45} weight={800} uppercase dynamicLite>
					Портрет Западной Швейцарии
				</Text>
				<Text size={22} weight={800} uppercase align='center' dynamicLite>
					Примитивист Фиштр расписывает новый бюджетный авиалайнер
				</Text>
			</div>
			<img className={styles.image} src={plane} alt='Картинка самолета' />
			<Text dynamic size={18} fontStyle='italic'>
				Фото: Hans-Peter Gauster, &quot;Bombardier CSeries CS300 HB-JCA&quot; ©
				2017 CC BY-SA 2.0
			</Text>
			<Text dynamic size={18}>
				Швейцарская авиакомпания Swiss получила первый из пяти заказанных ею
				бюджетных авиалайнеров Bombardier CS100. Самолёт получил необычную
				ливрею, которая стала результатом сотрудничества с Музеем Арт Брют в
				Лозанне.
			</Text>
			<Text dynamic size={18}>
				Чтобы разрисовать первый самолёт, в авиакомпании выбрали работы Ханса
				Крюзи, который рисует поезда, самолёты и вокзалы, а также придумали
				проект, посвящённый Романдии &mdash; франкоговорящей части Швейцарии.
			</Text>
			<Text dynamic size={18}>
				Выбор пал на примитивиста Матиаса Форбаша, работающего под псевдонимом
				Фиштр. Ему поставили задачу изобразить всё лучшее во франкоговорящей
				части Швейцарии — горы, озёра, вина, сыры, доброжелательность и свобода.
				Заказ был выполнен в рекордный срок, всего за 5 месяцев. Самолёт
				получился похожим на самого художника: такой же добродушный и с улыбкой
				до ушей.
			</Text>
			<Text dynamic size={18}>
				С мая 2017 года &quot;Бомбардье&quot; носит имя &quot;Швейцарская
				Романдия&quot; и регистрационный номер HB-JCA ; совершает в среднем 4
				коммерческих полёта в сутки. Его можно видеть в &quot;Домодедово&quot;,
				а также в аэропортах Парижа, Валенсии, Кракова, Берлина, Вены, Загреба,
				на на Майорке, Крите и Сицилии. Самолёт останется в той же ливрее, пока
				его купит другая авиакомпания.
			</Text>
		</article>
	);
};
