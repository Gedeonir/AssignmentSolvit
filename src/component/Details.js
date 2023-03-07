

export default function Details(){
    return(
        <div className="py-10 min-h-screen">
        <div className="w-full px-10 py-10 m-auto flex justify-between min-h-screen dark:bg-gray-800 dark:text-gray-50  bg-gray-50 rounded-xs shadow bg--800">
            <div className='h-96 w-full'>
                <img className="w-full h-full" src="https://flagcdn.com/dz.svg" alt="flag Image" />
            </div>
            <div className="py-2 px-4 w-full mx-10">
                <h2 className='py-12 font-bold'>Name</h2>
                <div className="flex justify-between my-3">
                    <div>
                        <div className='flex'>
                            <p className="font-medium">Native name:</p>
                            <p className='font-light'></p>
                        </div>
                        <div className='flex'>
                            <p className="font-medium">Population:</p>
                            <p className='font-light'></p>
                        </div>
                        <div className='flex'>
                            <p className="font-medium">Region:</p>
                            <p className='font-light'></p>
                        </div>
                        <div className='flex'>
                            <p className="font-medium">Sub Region:</p>
                            <p className='font-light'></p>
                        </div>
                        <div className='flex'>
                            <p className="font-medium">Capital:</p>
                            <p className='font-light'></p>
                        </div>
                    </div>

                    <div>
                        <div className='flex'>
                            <p className="font-medium">Top Level domain:</p>
                            <p className='font-light'></p>
                        </div>
                        <div className='flex'>
                            <p className="font-medium">Currencies:</p>
                            <p className='font-light'></p>
                        </div>
                        <div className='flex'>
                            <p className="font-medium">Languages:</p>
                            <p className='font-light'></p>
                        </div>
                    </div>
                </div>
                <div className='flex my-9'>
                    <p className="font-medium">Border countries:</p>
                    <p className='font-light'></p>
                </div>
                
            </div>
           
        </div>
    </div>
    )
}