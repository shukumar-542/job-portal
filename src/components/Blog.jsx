import React from 'react';

const Blog = () => {
    return (
        <div className='mt-8 w-[90%] mx-auto'>
            <div className='my-5'>
                <h1 className='text-2xl'>Q1 .When should you use context API?</h1>
                <div className=' my-5 bg-slate-100 p-5 rounded text-xl space-y-5'>
                    <p>
                        <span className='font-bold'>Context Api: </span>
                        Context Api in react is simple way to pass data one component form another component
                        without any props drilling. context api basically used when a data need to share many
                        component in your application. when a global data need to access many multiple component.
                        using context api it's easy to pass the data nested component.  

                    </p>
                   

                </div>
                <h1 className='text-2xl'>Q2 . What is a custom hook?</h1>
                <div className='my-5 bg-slate-100 p-5 rounded text-xl'>
                    <p>
                        <span className='font-bold'>Custom Hook: </span>
                        Custom hooks is a javascript function. create custom hook that can be share multiple component
                        that can be reused logic across multiple component as organized way.custom hook Building your own Hooks
                         lets you extract component logic into reusable functions. 
                    </p>
                </div>


                <h1 className='text-2xl'> Q3. What is useRef?</h1>
                <div className='my-5 bg-slate-100 p-5 rounded text-xl'>
                    <p>
                        <span className='font-bold'>useRef : </span>
                       useRef is a built hook in react that return mutable object. 
                    </p>
                </div>

                <h1 className='text-2xl'>Q4 . What is useMemo?</h1>
                <div className='my-5 bg-slate-100 p-5 rounded text-xl'>
                    <p>
                        <span className='font-bold'>useMemo: </span>
                       useMemo  is a built-in hook in React that allows you to optimize
                        the performance of your components by memoizing the result of a function call.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blog;