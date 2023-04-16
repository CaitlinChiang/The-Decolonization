import TribeCards from './layouts/communities/cards'
import CreateCommunity from './layouts/communities/create'
import UpdateCommunityInformation from './layouts/communities/update'
import ResearcherProfile from 'layouts/researchers/profile'
import CreateResearcher from './layouts/researchers/create'
// import Requests from "layouts/requests"
// import SignIn from "layouts/authentication/sign-in"
// import SignUp from "layouts/authentication/sign-up"
// import ResearchApplicants from 'layouts/researchers/applicants'

// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Settings from "examples/Icons/Settings";
import Document from "examples/Icons/Document";
import CustomerSupport from "examples/Icons/CustomerSupport";
import Cube from "examples/Icons/Cube";

const user = {
  permission: 'LOCAL_MEMBER', // LOCAL_MEMBER, RESEARCHER, PUBLIC_USER, ADMIN
}

const routes = [
  {
    type: "collapse",
    name: "Home",
    key: "home",
    route: "/home",
    icon: <Office size="12px" />,
    component: <TribeCards />,
    noCollapse: true,
    permission: ['LOCAL_MEMBER', 'RESEARCHER', 'PUBLIC_USER', 'ADMIN']
  },
  {
    type: "collapse",
    name: "Researcher",
    key: "researcher",
    route: "/researcher",
    icon: <Settings size="12px" />,
    component: <ResearcherProfile />,
    noCollapse: true,
    permissions: ['LOCAL_MEMBER', 'RESEARCHER']
  },
  // {
  //   type: "collapse",
  //   name: "Test",
  //   key: "test",
  //   route: "/test",
  //   icon: <Document size="12px" />,
  //   component: <CommunityMoreInformation />,
  //   noCollapse: true,
  //   permissions: ['ADMIN']
  // },
  {
    type: "collapse",
    name: "Community",
    key: "community",
    route: "/community",
    icon: <Document size="12px" />,
    component: <CreateCommunity />,
    noCollapse: true,
    permissions: ['ADMIN']
  },
  {
    type: "collapse",
    name: "Apply",
    key: "apply",
    route: "/apply",
    icon: <Document size="12px" />,
    component: <CreateResearcher />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Information",
    key: "information",
    route: "/updateInformation",
    icon: <Cube size="12px" />,
    component: <UpdateCommunityInformation />,
    noCollapse: true,
  },
  // {
  //   type: "collapse",
  //   name: "Requests",
  //   key: "requests",
  //   route: "/requests",
  //   icon: <CustomerSupport size="12px" />,
  //   component: <Requests />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Researchers",
  //   key: "researchers",
  //   route: "/researchers",
  //   icon: <CustomerSupport size="12px" />,
  //   component: <ResearchApplicants />,
  //   noCollapse: true,
  // }
]

// const renderedRoutes = routes?.map((e) => {
  
// })

export default routes
