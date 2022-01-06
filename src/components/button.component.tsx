import { FC } from "react";
import cx from 'classnames'

import Icon from "../svg/icon.svg"

type Props = {
    classname: string,
    text: string
};

const Button: FC<Props> = ({ classname, text }) => {
    return (
        <div
            className={cx(
                "relative flex justify-center items-center btn-base",
                classname
            )}
        >
            <Icon />
            <div className="absolute m-auto text-center text-[#ffd58c] select-none">
                {text}
            </div>
        </div>
    )
};

export default Button;
