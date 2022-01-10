import cx from 'classnames'
import BorderBottom from '../svg/lobby/border-bottom.svg';
import BorderTop from '../svg/lobby/border-top.svg';
import LobbyBorder from '../svg/lobby/border.svg';
import Button from '../svg/lobby/button.svg';
import IconBorder from '../svg/lobby/iconborder.svg';
import PlayerBorder from '../svg/lobby/playerborder.svg';

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
                <div className={cx(
                    'flex justify-center items-center',
                    'mt-10 w-4/5 top-[12%] max-w-[1105px]',
                    'text-yellow-custom',
                )}
                >
                    <div className='relative flex flex-col items-center w-1/4'>
                        <PlayerBorder classname='w-3/4 h-auto m-auto' />
                        <div className='absolute w-full flex flex-col items-center justify-center gap-8 top-[10%]'>
                            <IconBorder classname='w-2/5 h-auto top-[10%]' />
                            <div className='w-full h-full flex fex-col item-cemter justify-center'>
                                <div className={cx(
                                    'top-[40%]',
                                    'flex flex-col items-center',
                                    'text-xl',
                                    'md:text-2xl'
                                )}
                                >
                                    <BorderTop classname='w-[45%] h-auto' />
                                    <div className="my-2">
                                        MYNAME
                                    </div>
                                    <BorderBottom classname='w-[45%] h-auto' />
                                </div>
                            </div>
                            <div className='top-[62%] text-center text-4xl'>
                                READY
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex top-[75%] translate-x-1/4 mt-20 w-1/2'>
                    <Button classname='h-auto' />
                    <Button classname='scale-75 h-auto' />
                </div>
                <div className={cx(
                    'absolute bottom-0 left-0 border-2 border-yellow-custom z-10',
                    'bg-gray-700/90',
                    'w-1/2 h-[10%] hover:h-[40%]',
                    'transition-all ease-linear duration-[0.2s]'
                )}
                >

                </div>
            </div>

        </div>
    )
}

export default Lobby;
