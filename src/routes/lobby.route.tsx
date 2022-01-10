import cx from 'classnames'
import { Link } from 'react-router-dom';
import LobbyChatBox from '../components/lobbychatbox.component';
import PlayerCards from '../components/playercards.component';
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
                <PlayerCards />
                <div className='flex mt-20 translate-x-1/4 w-1/2'>
                    <Link to='/game' className='relative flex justify-center items-center w-1/2'>
                        <Button classname='h-auto btn-base peer' />
                        <div className='absolute text-yellow-custom text-4xl pointer-events-none peer-hover:scale-[1.2]'>PLAY</div>
                    </Link>
                    <Link to='/rooms' className='relative flex justify-center items-center w-1/2 scale-75'>
                        <Button classname='h-auto btn-base peer' />
                        <div className='absolute text-yellow-custom text-4xl pointer-events-none peer-hover:scale-[1.2]'>LEAVE</div>
                    </Link>
                </div>
                <LobbyChatBox />
            </div>
        </div>
    )
};

export default Lobby;
