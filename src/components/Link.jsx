import classNames from 'classnames';
import React from 'react'
import useNavigation from '../hooks/useNavigation';

const Link = ({ to, children, className, activeClassName }) => {
    const { navigate, currentPath } = useNavigation();

    const classes = classNames('text-blue-500', className, currentPath === to && activeClassName);

    const handleClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();
        navigate(to);
    }
    return (
        <a onClick={handleClick} href={to} className={classes}>{children}</a>
    )
}

export default Link
