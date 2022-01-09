import cx from 'classnames'
import { Link } from 'react-router-dom';
import RoomBorder from '../svg/roomborder.svg';
import RoomButton from '../svg/roombutton.svg';
import RoomCancelButton from '../svg/roomcanclebutton.svg';
import RoomLine1 from '../svg/roomline-1.svg';
import RoomLine2 from '../svg/roomline-2.svg';
import RoomLine3 from '../svg/roomline-3.svg';
import RoomTitleBorderBottom from '../svg/roomtitleborder-bottom.svg';
import RoomTitleBorderTop from '../svg/roomtitleborder-top.svg';

const Rooms = () => {
    const roomDetails = [
        {
            name: 'AAAAAAAAAAAAAA',
            players: '1/3'
        },
        {
            name: 'BBBBBB',
            players: '1/3'
        },
        {
            name: 'CCCCCCC',
            players: '1/3'
        },
        {
            name: 'CCCCCCC',
            players: '1/3'
        },
        {
            name: 'CCCCCCC',
            players: '1/3'
        },
        {
            name: 'CCCCCCC',
            players: '1/3'
        },
    ]
    return (
        <div
            className={cx(
                "absolute inset-6 bg-black/10 backdrop-blur-xl",
                "flex items-center justify-center",
            )}
        >
            <div
                className={cx(
                    "w-full h-full p-4",
                    "relative flex items-center justify-center"
                )}
            >
                <RoomBorder classname='w-[90%] h-full max-w-[1280px]' />
                <div className={cx(
                    'absolute top-[7%]',
                    'flex flex-col items-center',
                    'text-yellow-custom text-3xl',
                    'md:text-5xl'
                )}
                >
                    <RoomTitleBorderTop classname='w-fit h-auto' />
                    <div className="my-2">
                        ROOM
                    </div>
                    <RoomTitleBorderBottom classname='w-fit h-auto' />
                </div>
                <Link to='/play'>
                    <RoomCancelButton classname='absolute top-0 right-0 w-auto hidden sm:block' />
                </Link>
                <RoomLine1 classname='w-[75%] max-w-[1107px] h-auto max-h-6 absolute top-[30%]' />
                <RoomLine2 classname='w-[75%] max-w-[1107px] h-auto max-h-4 absolute top-[40%]' />
                <RoomLine3 classname='w-[75%] max-w-[1107px] h-auto max-h-12 absolute top-[70%]' />
                <div className={cx(
                    'absolute top-[34.3%] w-[75%] max-w-[1107px] max-h-[35.2%] overflow-hidden',
                    'flex flex-col items-center',
                    'text-yellow-custom'
                )}
                >
                    <div className='flex flex-row w-full text-xl sm:text-3xl justify-center items-center mb-12 text-center '>
                        <div className='w-1/3'>NAME</div>
                        <div className='w-1/3'>PLAYERS</div>
                        <div className='w-1/3'></div>
                    </div>
                    <div className='flex flex-col h-full w-full overflow-y-auto scrollbar-hide gap-[5px]'>
                        {roomDetails.map(({ name, players }) => {
                            return (
                                <div className='flex flex-row w-full text-md md:text-xl justify-center items-center text-center'>
                                    <div className='w-1/3 break-words'>{name}</div>
                                    <div className='w-1/3'>{players}</div>
                                    <div className='w-1/3 relative flex justify-center items-center my-auto'>
                                        <RoomButton classname='w-1/3 h-auto m-auto btn-base min-h-[40px] min-w-[80px]' />
                                        <div className='absolute'>JOIN</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div>
                    </div>
                </div>
                <div className={cx(
                    'absolute top-[79%] w-3/4',
                    'flex justify-center items-center -space-x-1 sm:gap-x-8'
                )}
                >
                    <div className='relative flex justify-center items-center'>
                        <RoomButton classname='h-auto w-2/3 min-w-[80px] btn-base' />
                        <div className='absolute text-yellow-custom text-md sm:text-2xl'>REFRESH</div>
                    </div>
                    <div className='relative flex justify-center items-center'>
                        <RoomButton classname='h-auto w-2/3 min-w-[80px] btn-base' />
                        <div className='absolute text-yellow-custom text-md sm:text-2xl'>CREATE</div>
                    </div>
                    <div className='relative flex justify-center items-center'>
                        <RoomButton classname='h-auto w-2/3 min-w-[80px] btn-base' />
                        <div className='absolute text-yellow-custom text-md sm:text-2xl'>FIND</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rooms;

