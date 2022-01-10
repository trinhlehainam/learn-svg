import cx from 'classnames'
import LobbyChatBox from '../components/lobbychatbox.component';
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
                <LobbyChatBox />
            </div>
        </div>
    )
}

export default Lobby;
