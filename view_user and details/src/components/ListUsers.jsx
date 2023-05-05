import { useEffect, useState } from 'react';
import GetDetails from './GetDetails';
import axios from 'axios';

function ListUsers() {
	const [list, setList] = useState([]);
	const [open, setOpen] = useState(false);
	const [element, setElement] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const result = await axios.get('https://jsonplaceholder.typicode.com/users/');
			setList(result?.data);
			return result;
		};
		getData();
	}, []);

	const handleClick = (e, item) => {
		e.preventDefault();
		setElement(item);
		setOpen(true);
	};

	return (
		<div className='flex flex-col min-h-screen'>
			<main className='flex-auto'>
				<section className='w-full flex flex-wrap justify-center'>
					<div className='md:w-4/5 lg:w-1/2 block rounded-sm  bg-white'>
						<h1 className=' font-extrabold mt-32 uppercase text-2xl  text-gray-700 text-center'>
							Users
						</h1>
						{list?.length > 0 && (
							<ul className='max-w-full divide-y w-full mt-10 ml-16 divide-gray-200 dark:divide-gray-700'>
								{list.map((item, index) => (
									<li key={index} className='pb-3 sm:pb-4'>
										<div className='flex items-center space-x-4'>
											<div className='flex-1 min-w-0'>
												<p className='text-sm font-medium text-gray-900 truncate dark:text-white'>
													{item?.name}
												</p>
											</div>

											<div className='inline-flex items-center mt-4 text-base font-semibold text-gray-900 dark:text-white'>
												<button
													type='button'
													onClick={(e) => handleClick(e, item)}
													className='border rounded p-2 mr-2 text-blue-500 hover:bg-gray-50'
												>
													{' '}
													View Details
												</button>
											</div>
										</div>
									</li>
								))}
							</ul>
						)}
						{open && <GetDetails element={element} setOpen={setOpen}/>}
					</div>
				</section>
			</main>
		</div>
	);
}

export default ListUsers;
