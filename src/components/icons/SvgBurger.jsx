export const SvgBurger = (props) => (
	<svg
		{...props}
		fill="none"
		stroke="currentColor"
		strokeWidth=".7"
		viewBox="0 0 25 25"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M4 7h16M4 12h16M4 17h16"
		/>
	</svg>
)
