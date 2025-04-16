import { createRoot } from 'react-dom/client';
import { StrictMode, useEffect } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { ArticleProvider, useArticle } from './context/ArticleContext';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const AppContent = () => {
	const { articleState } = useArticle();

	// Применяем CSS-переменные к корневому элементу
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
		<main className={clsx(styles.main)}>
			<ArticleParamsForm />
			<Article />
		</main>
	);
};

const App = () => {
	return (
		<ArticleProvider>
			<AppContent />
		</ArticleProvider>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
