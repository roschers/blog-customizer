import { Text } from 'src/ui/text';
import { Option } from './Option';
import clsx from 'clsx';
import { type OptionType } from 'src/constants/articleProps';

import styles from './RadioGroup.module.scss';

type RadioGroupProps = {
	name: string;
	title?: string;
	options: OptionType[];
	selected: OptionType;
	onChange?: (value: OptionType) => void;
};

export const RadioGroup = ({
	name,
	title,
	options,
	selected,
	onChange,
}: RadioGroupProps) => {
	const handleChange = (option: OptionType) => {
		onChange?.(option);
	};

	return (
		<div className={clsx(styles.container)}>
			{title && (
				<Text size={12} weight={800} uppercase>
					{title}
				</Text>
			)}
			<div className={clsx(styles.group)}>
				{options.map((option) => (
					<Option
						key={option.value}
						groupName={name}
						value={option.value}
						title={option.title}
						selected={selected}
						onChange={() => handleChange(option)}
						option={option}
					/>
				))}
			</div>
		</div>
	);
};
