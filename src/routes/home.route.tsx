import cx from 'classnames'

import Title from '../components/title.component'
import Button from '../components/button.component'

const Home = () => {
    return (
        <div
            className={cx(
                "flex flex-col items-center gap-0",
                "font-Dalek font-bold text-3xl",
                "sm:text-5xl"
            )}
        >
            <Title />
            <div
                className={cx(
                    "flex flex-col items-center gap-6",
                    "sm:gap-1",
                )}
            >
                <Button classname="w-3/5 sm:w-full" text="Single" delay={0.6}/>
                <Button classname="w-3/5 sm:w-full" text="Multiplayer" delay={0.4}/>
                <Button classname="w-3/5 sm:w-full" text="Setting" delay={0.2}/>
            </div>
        </div>
    );
};

export default Home;
