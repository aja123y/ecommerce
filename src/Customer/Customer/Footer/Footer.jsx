import { Button, Grid, Typography } from "@mui/material";
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
          <div>
            <Typography className="pb-5" variant="h6">
              Company
            </Typography>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterButtom>
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterButtom>
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterButtom>
              Press
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterButtom>
              Jobs
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterButtom>
              Partners
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div>
            <Typography className="pb-5" variant="h6">
              Solutions
            </Typography>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterButtom>
              Marketing
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterButtom>
              Analytics
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterButtom>
              Commerce
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterButtom>
              Insights
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterButtom>
              Supports
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div>
            <Typography className="pb-5" variant="h6">
              Documentation
            </Typography>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterButtom>
              Guides
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterButtom>
              API Status
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div>
            <Typography className="pb-5" variant="h6">
              Legal
            </Typography>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterButtom>
              Claim
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterButtom>
              Privacy
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterButtom>
              Terms
            </Button>
          </div>
        </Grid>
        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2024 My Company. all rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
