import cx from 'classnames'

import Title from '../components/title.component'
import Button from '../components/button.component'

const Home = () => {
    const menuTexts = ['Play', 'Login', 'Setting'];
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
                    "sm:gap-1 sm:[--offset-length:-770]",
                )}
            >
                {menuTexts.map((text, idx) => {
                    const delay = 1.6 - 0.2 * idx;
                    return (
                        <Button classname="w-3/5 sm:w-full" text={text} delay={delay} />
                    )
                })}
            </div>
        </div>
    );
};

export default Home;
