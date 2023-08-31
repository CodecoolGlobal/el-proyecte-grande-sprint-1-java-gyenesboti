import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../components/ResponiseveAppBar";
import frontPictur from "../assets/vatezon.png"
import { Box } from '@mui/material';


const Layout = () => {



  return (
    <div className="Layout">
      <ResponsiveAppBar />
      <Box
        component="div"
        sx={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          backgroundImage: `url(${frontPictur})`,
          backgroundPosition: 'right',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <Outlet />
    </div>
  )
}

export default Layout;
