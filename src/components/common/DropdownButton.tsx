import React, { useState, useRef, useEffect, ReactNode } from 'react';

interface Option {
    label: string;
    value: string | number;
}

interface DropdownButtonProps {
    label: string;
    children?: ReactNode;
    options?: Option[];
    onSelect?: (option: Option) => void;
    buttonClassName?: string;
    menuClassName?: string;
    itemClassName?: string;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
    label,
    children,
    options,
    onSelect,
    buttonClassName = '',
    menuClassName = '',
    itemClassName = ''
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (option: Option) => {
        onSelect && onSelect(option);
        setIsOpen(false);
    };

    const renderContent = () => {
        if (children) {
            return children;
        }

        if (options) {
            return options.map((option, index) => (
                <button
                    key={index}
                    onClick={() => handleSelect(option)}
                    className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${itemClassName}`}
                    role="menuitem"
                >
                    {option.label}
                </button>
            ));
        }

        return null;
    };

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                type="button"
                onClick={toggleDropdown}
                className={`inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 ${buttonClassName}`}
            >
                {label}
                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>

            {isOpen && (
                <div className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${menuClassName}`}>
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {renderContent()}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownButton;