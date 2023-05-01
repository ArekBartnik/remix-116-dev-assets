import type { V2_MetaFunction } from '@remix-run/node';
import { Icon } from '~/components/icon';
import documentIcon from '~/svg/document.svg';

export const meta: V2_MetaFunction = () => {
	return [{ title: 'New Remix App' }];
};

export default function Index() {
	return (
		<div>
			<h1>
				Welcome to Remix <Icon src={documentIcon} size={20} />
			</h1>
		</div>
	);
}
