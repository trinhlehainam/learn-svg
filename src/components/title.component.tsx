import cx from 'classnames'

const Title = () => {
    return (
        <div
            className={cx(
                "relative flex justify-center items-center text-7xl text-yellow-custom",
                "mt-16 mb-16",
                "sm:text-9xl sm:mt-32 sm:mb-20"
            )}
        >
            <div>GEM</div>
            <img
                className={cx(
                    "w-[72px] h-[72px]",
                    "sm:w-[128px] sm:h-[128px]",
                )}
                src={`${process.env.PUBLIC_URL}/images/gem.png`}
                alt="gem icon" />
            <div>TD</div>
        </div>
    );
};

export default Title;
