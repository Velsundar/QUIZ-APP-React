import React, { useContext, useState } from 'react';
import { QuizContext } from '../Context/QuizHolder';

export default function Quiz() {
    const [current, setCurrent] = useState(0);

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <Box current={current} next={setCurrent} />
        </div>
    );
}

const Box = ({ current, next }) => {
    const { quizzes, correct, setCorrect, setExit } = useContext(QuizContext);
    const [ans, setAns] = useState('');

    const saveHandler = () => {
        if (quizzes[current].correct === ans) {
            setCorrect(correct + 1);
        }
        setAns('');
        if (current + 1 === quizzes.length) {
            setExit(true);
        } else {
            next(current + 1);
        }
    };

    return (
        <div className='w-full sm:w-[50%] border shadow-lg rounded-md overflow-hidden h-auto sm:h-80'>
            <div className='p-2 text-2xl'> {current + 1}) {quizzes[current].question}</div>
            <div className='grid grid-cols-1 sm:grid-cols-2 mt-3'>
                <div
                    className={`p-4 sm:p-9 px-10 sm:px-20 border ${
                        ans === 'a' ? 'bg-green-300 text-white' : ''
                    } hover:bg-purple-300 hover:text-white duration-200 cursor-pointer h-20 sm:h-24 text-xl sm:text-2xl`}
                    onClick={() => setAns('a')}
                >
                    {quizzes[current].a}
                </div>
                <div
                    className={`p-4 sm:p-9 px-10 sm:px-20 border ${
                        ans === 'b' ? 'bg-green-300 text-white' : ''
                    } hover:bg-purple-300 hover:text-white duration-200 cursor-pointer h-20 sm:h-24 text-xl sm:text-2xl`}
                    onClick={() => setAns('b')}
                >
                    {quizzes[current].b}
                </div>
                <div
                    className={`p-4 sm:p-9 px-10 sm:px-20 border ${
                        ans === 'c' ? 'bg-green-300 text-white' : ''
                    } hover:bg-purple-300 hover:text-white duration-200 cursor-pointer h-20 sm:h-24 text-xl sm:text-2xl`}
                    onClick={() => setAns('c')}
                >
                    {quizzes[current].c}
                </div>
                <div
                    className={`p-4 sm:p-9 px-10 sm:px-20 border ${
                        ans === 'd' ? 'bg-green-300 text-white' : ''
                    } hover:bg-purple-300 hover:text-white duration-200 cursor-pointer h-20 sm:h-24 text-xl sm:text-2xl`}
                    onClick={() => setAns('d')}
                >
                    {quizzes[current].d}
                </div>
            </div>
            <div className='flex flex-col sm:flex-row justify-center sm:justify-between'>
                <div className='p-2 sm:p-4 cursor-pointer w-[140px] bg-orange-500 text-white my-2 sm:my-0' onClick={() => setAns('')}>
                    Reset
                </div>
                <div className='p-2 sm:p-4 cursor-pointer w-[180px] bg-green-500 text-white my-2 sm:my-0' onClick={saveHandler}>
                    Save & Next
                </div>
                <div className='p-2 sm:p-4 cursor-pointer w-[140px] bg-red-500 text-white my-2 sm:my-0' onClick={() => setExit(true)}>
                    Exit
                </div>
            </div>
        </div>
    );
};
