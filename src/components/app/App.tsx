import { useState } from 'react';
import { Article } from '../article/Article';
import { ArticleParamsForm } from '../article-params-form/ArticleParamsForm';
import {
	defaultArticleState,
	type ArticleStateType,
} from 'src/constants/articleProps';

import styles from './App.module.scss';

export const App = () => {
	const [articleState, setArticleState] =
		useState<ArticleStateType>(defaultArticleState);

	const style = {
		'--font-family': articleState.fontFamilyOption.value,
		'--font-size': articleState.fontSizeOption.value,
		'--font-color': articleState.fontColor.value,
		'--content-width': articleState.contentWidth.value,
		'--bg-color': articleState.backgroundColor.value,
	} as React.CSSProperties;

	return (
		<div className={styles.container} style={style}>
			<main className={styles.main}>
				<ArticleParamsForm
					articleState={articleState}
					setArticleState={setArticleState}
				/>
				<Article articleState={articleState} />
			</main>
		</div>
	);
};
