import { type SVGProps } from "react";

export function Icon({
	src,
	size,
	...props
}: { src?: string; size?: number } & SVGProps<SVGSVGElement>) {
	return (
		<svg
			aria-hidden="true"
			focusable={false}
			viewBox={`0 0 ${size} ${size}`}
			fill="none"
			width={size}
			height={size}
			{...props}
		>
			<use href={`${src}#ic`} />
		</svg>
	);
}
