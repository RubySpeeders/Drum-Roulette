import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    "&::before": {
      backgroundColor: "#F5F5F5",
    },
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#F5F5F5",
    color: "#4A2462",
    padding: 20,
    maxWidth: 330,
    maxHeight: 90,
    fontSize: theme.typography.pxToRem(16),
  },
}));

export default CustomTooltip;
