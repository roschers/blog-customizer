import { createContext, useContext, useState, ReactNode } from 'react';
import {
	defaultArticleState,
	type ArticleStateType,
} from 'src/constants/articleProps';

type ArticleContextType = {
	articleState: ArticleStateType;
	setArticleState: (state: ArticleStateType) => void;
};

const ArticleContext = createContext<ArticleContextType | undefined>(undefined);

export const ArticleProvider = ({ children }: { children: ReactNode }) => {
	const [articleState, setArticleState] =
		useState<ArticleStateType>(defaultArticleState);

	return (
		<ArticleContext.Provider value={{ articleState, setArticleState }}>
			{children}
		</ArticleContext.Provider>
	);
};

export const useArticle = () => {
	const context = useContext(ArticleContext);
	if (context === undefined) {
		throw new Error('useArticle must be used within an ArticleProvider');
	}
	return context;
};
