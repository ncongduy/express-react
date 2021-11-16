import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

export default function Button({
	primary,
	secondary,
	tertiary,
	disabled,
	children,
	onClick,
}) {
	const [click, setClick] = useState(false);

	const btnClass = classNames({
		[styles.btn]: true,
		[styles.primary]: primary,
		[styles.secondary]: secondary,
		[styles.tertiary]: tertiary,
		[styles.clicked]: click,
		[styles.disabled]: disabled,
	});

	return (
		<>
			<button
				className={btnClass}
				onMouseDown={() => setClick(true)}
				onMouseUp={() => setClick(false)}
				onClick={() => onClick(children)}
			>
				{children}
			</button>
		</>
	);
}
