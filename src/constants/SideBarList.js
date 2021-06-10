import AccountBalanceRoundedIcon from "@material-ui/icons/AccountBalanceRounded";
import AirportShuttleRoundedIcon from "@material-ui/icons/AirportShuttleRounded";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import PeopleOutlineRoundedIcon from "@material-ui/icons/PeopleOutlineRounded";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import ShowChartOutlinedIcon from "@material-ui/icons/ShowChartOutlined";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";

const menuList = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
    path: "/",
  },
  {
    name: "Point of Sell",
    icon: <MoveToInboxIcon />,
    path: "/",
  },
  {
    name: "Sell",
    icon: <LocalOfferOutlinedIcon />,
    path: "/",
    items: [{ name: "", icon: <DashboardIcon />, path: "" }],
  },
  {
    name: "Quotation",
    icon: <FavoriteBorderOutlinedIcon />,
    path: "/",
    items: [{ name: "", icon: <DashboardIcon />, path: "" }],
  },
  {
    name: "Installment",
    icon: <EqualizerOutlinedIcon />,
    path: "/",
    items: [{ name: "", icon: <DashboardIcon />, path: "" }],
  },
  {
    name: "Purchase",
    icon: <ShoppingCartOutlinedIcon />,
    path: "/",
    items: [{ name: "", icon: <DashboardIcon />, path: "" }],
  },
  {
    name: "Stock Transfer",
    icon: <DashboardIcon />,
    path: "/",
    items: [{ name: "", icon: <DashboardIcon />, path: "" }],
  },
  {
    name: "Product",
    icon: <StarBorderRoundedIcon />,
    path: "/",
    items: [{ name: "", icon: <DashboardIcon />, path: "" }],
  },
  {
    name: "Customer",
    icon: <PeopleOutlineRoundedIcon />,
    path: "/",
    items: [{ name: "", icon: <DashboardIcon />, path: "" }],
  },
  {
    name: "Supplier",
    icon: <AirportShuttleRoundedIcon />,
    path: "/",
    items: [{ name: "", icon: <DashboardIcon />, path: "" }],
  },
  {
    name: "Accounting",
    icon: <AccountBalanceRoundedIcon />,
    path: "/",
    items: [{ name: "", icon: <DashboardIcon />, path: "" }],
  },
  {
    name: "Expanditure",
    icon: <DashboardIcon />,
    path: "/",
    items: [{ name: "", icon: <DashboardIcon />, path: "" }],
  },
  {
    name: "Loan Manager",
    icon: <DashboardIcon />,
    path: "/",
    items: [{ name: "", icon: <DashboardIcon />, path: "" }],
  },
  {
    name: "Reports",
    icon: <DescriptionOutlinedIcon />,
    path: "/",
    items: [{ name: "", icon: <DashboardIcon />, path: "" }],
  },
  {
    name: "Analytics",
    icon: <ShowChartOutlinedIcon />,
    path: "/",
    items: [{ name: "", icon: <DashboardIcon />, path: "" }],
  },
];

export default menuList;
