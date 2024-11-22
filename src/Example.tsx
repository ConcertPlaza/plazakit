import React from 'react';

import styled from '@emotion/styled';

export type ExampleProps = {
	text?: string;
};

const CustomButton = styled.button`
  color: red;
`;

export function Example(props: ExampleProps) {
	const [count, setCount] = React.useState(0);
	return (
		<CustomButton
			id="example-button"
			onClick={() => setCount(count + 1)}
			type="button"
		>
			{`${props.text} ${count}`}
		</CustomButton>
	);
}
