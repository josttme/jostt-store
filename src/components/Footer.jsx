export function Footer() {
	return (
		<footer className="bg-white pb-5 lg:pb-0 dark:bg-gray-900 ">
			<div className="container mx-auto px-6 py-12">
				<div className="grid grid-cols-1  gap-6 sm:grid-cols-2 ">
					<div>
						<p className="text-xl font-semibold text-gray-800 dark:text-white">
							Platzi courses
						</p>
						<div className="mt-5 flex flex-col items-start space-y-2">
							<a
								href="https://platzi.com/cursos/laboratorio-react/"
								target="_blank"
								className="text-gray-600 transition-colors duration-300  hover:text-[#71a23c] hover:underline dark:text-gray-300 dark:hover:text-blue-400"
								rel="noreferrer"
							>
								Prueba Técnica: E-commerce Profesional con React.js
							</a>
							<a
								href="https://platzi.com/cursos/react-vite-tailwindcss/"
								target="_blank"
								className="text-gray-600 transition-colors duration-300  hover:text-[#71a23c] hover:underline dark:text-gray-300 dark:hover:text-blue-400"
								rel="noreferrer"
							>
								Curso de React.js con Vite.js y TailwindCSS
							</a>
							<a
								href="https://platzi.com/cursos/react/"
								target="_blank"
								className="text-gray-600 transition-colors duration-300 hover:text-[#71a23c] hover:underline dark:text-gray-300 dark:hover:text-blue-400"
								rel="noreferrer"
							>
								Curso de React.js: Navegación con React Router
							</a>
							<a
								href="https://platzi.com/cursos/react-hooks/"
								target="_blank"
								className="text-gray-600 transition-colors duration-300 hover:text-[#71a23c] hover:underline dark:text-gray-300 dark:hover:text-blue-400"
								rel="noreferrer"
							>
								Curso de React.js
							</a>
						</div>
					</div>
					<div className="mt-6 justify-self-end ">
						<a
							href="https://github.com/josttme/jostt-store"
							target="_blank"
							className="inline-flex h-12 w-52  items-center justify-center gap-x-3 rounded-lg bg-gray-800 px-4 py-2 text-sm text-white duration-300 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
							rel="noreferrer"
						>
							<span>Gitub Code</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="h-5 w-5"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
								/>
							</svg>
						</a>
					</div>
				</div>
				<hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />
				<div className="flex flex-col items-center  sm:flex-row lg:justify-between">
					<span to="/" className="text-2xl font-bold text-red-6 lg:mr-3">
						JosttStore
					</span>
					<p className="text-md mt-4  text-lg text-gray-500 sm:mt-0 dark:text-gray-300">
						© 2024 JosttMe
					</p>
				</div>
			</div>
		</footer>
	)
}
