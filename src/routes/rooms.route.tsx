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
                    'text-center text-yellow-custom text-3xl',
                    'md:text-5xl'
                )}
                >
                    <RoomTitleBorderTop />
                    <div className="my-4">
                        ROOM
                    </div>
                    <RoomTitleBorderBottom />
                </div>
                <RoomLine1 classname='w-[75%] max-w-[1155px] h-auto max-h-6 absolute top-[30%]' />
                <RoomLine2 classname='w-[75%] max-w-[1155px] h-auto max-h-4 absolute top-[40%]' />
                <RoomLine3 classname='w-[75%] max-w-[1155px] h-auto max-h-12 absolute top-[70%]' />
                <Link to='/play'>
                    <RoomCancelButton classname='absolute top-[10%] right-[12%] w-[10%] h-auto' />
                </Link>
                <div className={cx(
                    'absolute bottom-[8%] w-3/4',
                    'flex justify-center items-center gap-x-10'
                )}
                >
                    <RoomButton classname='scale-90 h-fit w-fit' />
                    <RoomButton classname='scale-90 h-fit w-fit' />
                    <RoomButton classname='scale-90 h-fit w-fit' />
                </div>
            </div>
        </div>
    )
}

export default Rooms;

