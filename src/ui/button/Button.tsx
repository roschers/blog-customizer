import styles from './Button.module.scss';
import { clsx } from 'clsx';
import { Text } from 'src/ui/text';

export const Button = ({
	title,
	onClick,
	htmlType,
	type,
}: {
	title: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
	type: 'apply' | 'clear';
}) => {
	return (
		<button
			className={clsx(
				styles.button,
				{ [styles.button_apply]: type === 'apply' },
				{ [styles.button_clear]: type === 'clear' }
			)}
			type={htmlType}
			onClick={onClick}>
			<Text size={18} uppercase weight={800}>
				{title}
			</Text>
		</button>
	);
};
