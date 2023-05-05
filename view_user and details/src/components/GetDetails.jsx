import { useState, useEffect } from 'react';
import axios from 'axios';

function GetDetails({ element, setOpen }) {
	const items = { ...element };

	const [image, setImages] = useState([]);

	useEffect(() => {
		const getImages = async () => {
			const result = await axios.get(`https://jsonplaceholder.typicode.com/photos/${element?.id}`);

			setImages(result?.data);
		};
		getImages();
	}, []);

	console.log(image?.url);
	return (
		<div
			className={`flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-blackRgba`}
		>
			<div className='relative my-6 mx-auto w-2/3'>
				<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
					<div className='flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t '>
						<span className='flex flex-row'>
							<h3 className='text-3xl font=semibold mr-4'>{items?.name}</h3>
							<img className='w-10 h-10 rounded-sm' src={image?.url} />
						</span>

						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='30'
							height='30'
							fill='currentColor'
							className='bi bi-x'
							viewBox='0 0 16 16'
							onClick={() => setOpen(false)}
						>
							{' '}
							<path
								d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'
								fill='red'
							></path>{' '}
						</svg>
					</div>
					<div className='flex flex-row ml-5'>
						<div className='w-1/2'>
							<div className='p-1 text-xs flex w-full flex-row'>
								<h3 className='w-1/3'>
									<b>ID: </b>
								</h3>
								<p className='w-2/3'>{items?.id}</p>
							</div>
							<div className='p-1 text-xs flex w-full flex-row'>
								<h3 className='w-1/3'>
									<b>Email: </b>
								</h3>
								<p className='w-2/3'>{items?.email}</p>
							</div>
						</div>
						<div className='w-1/2 m-2'>
							<div className='p-1 text-xs flex w-full flex-row'>
								<h3 className='w-1/3'>
									<b>Username: </b>
								</h3>
								<p className='w-2/3'>{items?.username}</p>
							</div>
							<div className='p-1 text-xs flex w-full flex-row'>
								<h3 className='w-1/3'>
									<b>Address: </b>
								</h3>
								<p className='w-2/3'>
									{items?.address?.street} {items?.address?.suite}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default GetDetails;
