import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { useEffect, useRef, useState } from 'react';
import { clsx } from 'clsx';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { Text } from 'src/ui/text';
import {
	fontFamilyOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	fontSizeOptions,
	defaultArticleState,
	type ArticleStateType,
} from 'src/constants/articleProps';
import { useArticle } from 'src/context/ArticleContext';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState(false);
	const formRef = useRef<HTMLElement>(null);
	const { articleState, setArticleState } = useArticle();
	const [formState, setFormState] =
		useState<ArticleStateType>(defaultArticleState);

	useEffect(() => {
		if (isOpen) {
			setFormState(articleState);

			const handleClickOutside = (event: MouseEvent) => {
				if (
					formRef.current &&
					!formRef.current.contains(event.target as Node)
				) {
					setIsOpen(false);
				}
			};

			document.addEventListener('mousedown', handleClickOutside);
			return () => {
				document.removeEventListener('mousedown', handleClickOutside);
			};
		}
	}, [isOpen, articleState]);

	const toggleForm = () => {
		setIsOpen(!isOpen);
	};

	const handleReset = () => {
		setFormState(defaultArticleState);
		setArticleState(defaultArticleState);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setArticleState(formState);
		setIsOpen(false);
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={toggleForm} />
			<aside
				ref={formRef}
				className={clsx(styles.container, {
					[styles.container_open]: isOpen,
				})}>
				<form
					className={styles.form}
					onSubmit={handleSubmit}
					onReset={handleReset}>
					<Text as='h2' size={31} weight={800} family='open-sans' uppercase>
						Задайте параметры
					</Text>

					<Select
						options={fontFamilyOptions}
						selected={formState.fontFamilyOption}
						onChange={(option) =>
							setFormState({ ...formState, fontFamilyOption: option })
						}
						title='ШРИФТ'
					/>

					<RadioGroup
						name='fontSize'
						options={fontSizeOptions}
						selected={formState.fontSizeOption}
						onChange={(option) =>
							setFormState({ ...formState, fontSizeOption: option })
						}
						title='РАЗМЕР ШРИФТА'
					/>

					<Select
						options={fontColors}
						selected={formState.fontColor}
						onChange={(option) =>
							setFormState({ ...formState, fontColor: option })
						}
						title='ЦВЕТ ШРИФТА'
					/>

					<div className={styles.divider} />

					<Select
						options={backgroundColors}
						selected={formState.backgroundColor}
						onChange={(option) =>
							setFormState({ ...formState, backgroundColor: option })
						}
						title='ЦВЕТ ФОНА'
					/>

					<Select
						options={contentWidthArr}
						selected={formState.contentWidth}
						onChange={(option) =>
							setFormState({ ...formState, contentWidth: option })
						}
						title='ШИРИНА КОНТЕНТА'
					/>

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='clear' htmlType='reset' />
						<Button title='Применить' type='apply' htmlType='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
