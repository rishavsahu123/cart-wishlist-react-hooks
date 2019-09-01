import React from 'react';
import clsx from 'clsx';
import DrawerComponent from './components/DrawerComponent';
import AppBarComponent from './components/AppBar';
import MainPage from './components';
import useStyles from './style';

export default function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const props = {open, setOpen, handleDrawerOpen}
  return (
    <div className={classes.root}>
      <AppBarComponent classes={classes} {...props}/>
      <DrawerComponent classes={classes} handleDrawerClose={handleDrawerClose} open={open}/>
      <MainPage classes={classes} fixedHeightPaper={fixedHeightPaper}/>
    </div>
  );
}

