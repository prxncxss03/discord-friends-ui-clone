import Tooltip from '@mui/material/Tooltip';


export const Tooltipp = ({tooltipChild, tooltipTitle, tooltipPlacement}) => {
    return (
        <Tooltip componentsProps={{
            tooltip: {
              sx: {
                bgcolor: 'common.black',
                color: '#ebedef',
                fontSize : '12.5px',
                fontWeight: '600',
                padding : '8px 10px 6px 10px',
                fontFamily :'Radio Canada',
                boxShadow : '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                '& .MuiTooltip-arrow': {
                  color: 'common.black',
                },
              },
            },
          }} title={tooltipTitle} placement={tooltipPlacement} arrow >
                  {tooltipChild}
        </Tooltip>
    )
}


  