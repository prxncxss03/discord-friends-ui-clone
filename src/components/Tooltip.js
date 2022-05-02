export const Tooltip = ({tooltipText}) => {
    return (
        <span className="absolute top-0 z-50 text-gray-400 text-xs bg-gray-900 rounded-md p-2">
            {tooltipText}
        </span>
    )
}