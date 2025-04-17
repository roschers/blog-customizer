import { useEffect } from 'react';
import { Article } from '../article/Article';
import { ArticleParamsForm } from '../article-params-form/ArticleParamsForm';
import { ArticleProvider, useArticle } from 'src/context/ArticleContext';

import styles from './App.module.scss';

const AppContent = () => {
	const { articleState } = useArticle();

	useEffect(() => {
		document.documentElement.style.setProperty(
			'--font-family',
			articleState.fontFamilyOption.value
		);
		document.documentElement.style.setProperty(
			'--font-size',
			articleState.fontSizeOption.value
		);
		document.documentElement.style.setProperty(
			'--font-color',
			articleState.fontColor.value
		);
		document.documentElement.style.setProperty(
			'--container-width',
			articleState.contentWidth.value
		);
		document.documentElement.style.setProperty(
			'--bg-color',
			articleState.backgroundColor.value
		);
	}, [articleState]);

	return (
		<main className={styles.main}>
			<ArticleParamsForm />
			<Article />
		</main>
	);
};

export const App = () => {
	return (
		<ArticleProvider>
			<AppContent />
		</ArticleProvider>
	);
};
