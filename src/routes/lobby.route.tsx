import cx from 'classnames'
import PlayerCard from '../components/playercard.component';
import Button from '../svg/lobby/button.svg';

const Lobby = () => {
    return (
        <div
            className={cx(
                "absolute inset-0 sm:inset-6 bg-black/10 backdrop-blur-xl",
                "flex items-center justify-center",
            )}
        >
            <div
                className={cx(
                    "w-full h-full p-4",
                    "relative flex flex-col items-center"
                )}
            >
                <PlayerCard />
                <div className='flex top-[75%] translate-x-1/4 mt-20 w-1/2'>
                    <Button classname='h-auto' />
                    <Button classname='scale-75 h-auto' />
                </div>
                <div
                    className={cx(
                        'flex flex-col-reverse justify-start',
                        'absolute bottom-0 left-0 w-1/3 h-full text-yellow-custom',
                    )}
                >
                    <input
                        type='text'
                        className='peer outline-none border-2 border-yellow-custom bg-gray-700/90 w-full text-lg'
                    />
                    <div
                        className={cx(
                            'bottom-0 left-0 border-2 border-yellow-custom z-10',
                            'bg-gray-700/90',
                            'w-full h-0 opacity-0',
                            'peer-focus:h-[400px] peer-focus:opacity-100',
                            'transition-all ease-linear duration-[0.2s]',
                            'overflow-auto scrollbar-hide'
                        )}
                    >
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lobby;
