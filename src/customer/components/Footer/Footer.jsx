import { Button, Grid, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" varient="h6">
            Company
          </Typography>
          <div>
            <Button className="pb-5" varient="h6">
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6">
              press
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6">
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6">
              Jobs
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6">
              Partners
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" varient="h6">
            Solutions
          </Typography>
          <div>
            <Button className="pb-5" varient="h6">
              Marketing
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6">
              Analytics
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6">
              Commerce
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6">
              Insights
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6">
              Supports
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" varient="h6">
            Documentation
          </Typography>
          <div>
            <Button className="pb-5" varient="h6">
              Guides
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6">
              API Status
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" varient="h6">
            Legal
          </Typography>
          <div>
            <Button className="pb-5" varient="h6">
              Claim
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6">
              Privacy
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6">
              Terms
            </Button>
          </div>
        </Grid>
        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2024 My Company.All rights reserved.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Made with love by Chetan.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Icons made by{" "}
            <Link
              href="https://www.freepik.com"
              color="inherit"
              underline="always"
            >
              Freepik
            </Link>{" "}
            from{" "}
            <Link
              href="https://www.flaticon.com/"
              color="inherit"
              underline="always"
            >
              www.flaticon.com
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
